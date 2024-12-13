import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    // Получение параметра "code"
    const code = req.nextUrl.searchParams.get('code');

    if (!code) {
      return NextResponse.json({ error: 'Неверный код' }, { status: 400 });
    }

    // Поиск verificationCode в базе данных
    const verificationCode = await prisma.verificationCode.findFirst({
      where: { code },
    });

    if (!verificationCode) {
      return NextResponse.json({ error: 'Код не найден' }, { status: 404 });
    }

    // Обновление пользователя как "проверенного"
    await prisma.user.update({
      where: { id: verificationCode.userId },
      data: { verified: new Date() },
    });

    // Удаление verificationCode после использования
    await prisma.verificationCode.delete({
      where: { id: verificationCode.id },
    });

    // Перенаправление на главную страницу с параметром "verified"
    const redirectUrl = new URL('/?verified=true', req.url);
    return NextResponse.redirect(redirectUrl);
  } catch (error) {
    console.error('[VERIFY_GET] Server error', error);

    // Возвращаем ошибку при сбое
    return NextResponse.json(
      { error: 'Произошла внутренняя ошибка сервера' },
      { status: 500 }
    );
  }
}
