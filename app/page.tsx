import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
} from "@/components/shared";
export default function Home() {
  return (
    <>
      <Container className="mt-5">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex flex-col gap-16">
            <ProductsGroupList
              title="Пиццы"
              items={[
                {
                  id: 1,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 5,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 5,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 6,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 7,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]}
              categoryId={1}
            />
            <ProductsGroupList
              title="Комбо"
              items={[
                {
                  id: 1,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 2,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 3,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 4,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 5,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 5,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 6,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
                {
                  id: 7,
                  name: "Чизбургер-пицца",
                  imageUrl:
                    "https://media.dodostatic.net/image/r:292x292/11EE7D610BBEB562BD4D48786AD87270.webp",
                  price: 550,
                  items: [{ price: 550 }],
                },
              ]}
              categoryId={2}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
