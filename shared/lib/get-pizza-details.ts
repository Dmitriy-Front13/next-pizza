import { calcTotalPizzaPrice } from './calc-total-pizza-price';
import { Ingredient, ProductItem } from '@prisma/client';
import { PizzaSize, PizzaType, mapPizzaType } from '../constants/pizza';

/**
 * Функция для получения деталей пиццы, включая общую стоимость и текстовое описание.
 *
 * @param type - тип пиццы
 * @param size - размер пиццы
 * @param items - список продуктов
 * @param ingredients - список ингредиентов
 * @param selectedIngredients - выбранные ингредиенты
 *
 * @returns объект, содержащий общую стоимость пиццы и текстовое описание
 */
export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<number>,
) => {
  const totalPrice = calcTotalPizzaPrice(type, size, items, ingredients, selectedIngredients);
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;

  return { totalPrice, textDetails };
};