import { ProductItem } from '@prisma/client';
import { PizzaType, pizzaSizes } from '../constants/pizza';
import { Variant } from '../components/shared/group-variants';


/**
 * Функция для получения доступных размеров пиццы
 *
 * @param type - тип пиццы
 * @param items - список продуктов
 *
 * @returns массив объектов с доступными размерами
 */
export const getAvailablePizzaSizes = (type: PizzaType, items: ProductItem[]): Variant[] => {
  const filteredPizzasByType = items.filter((item) => item.pizzaType === type);

  return pizzaSizes.map((item) => ({
    name: item.name,
    value: item.value,
    disabled: !filteredPizzasByType.some((pizza) => Number(pizza.size) === Number(item.value)),
  }));
};