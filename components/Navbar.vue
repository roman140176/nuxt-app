<template>
  <HeaderTop 
    :linksTop="linksTop"
    :languages="languages"
    :selectedLang="selectedLang"
    :isLang="isLang"
    @openLanguages="openLanguages"
    @closeLangugesAndSelect="closeLangugesAndSelect"
    @closeLanguges="closeLanguges"
    />
  <HeaderBottom :linksBottom="linksBottom" @placeSlot="placeSlot" @openModal="openModal"/>
  <Modal :isModal="isModal" @openModal="openModal" @closeModal="closeModal">
    <SubMenuProd :prod="prod"/>
  </Modal>
</template>

<script setup>

// моковые данные для пунктов верхнего и нижнего меню
const linksTop = ref([
  { id: 0, name: 'Карьера', href: '#' }, { id: 1, name: 'Техподдержка', href: '#' }, { id: 2, name: 'Контакты', href: '#' }
])
const linksBottom = ref([
  { id: 0, name: 'Продукты', href: '#', sub: true }, { id: 1, name: 'Решения', href: '#', sub: true }, { id: 2, name: 'Пресс-центр', href: '#' },
  { id: 3, name: 'Проекты', href: '#' }, { id: 4, name: 'О компании', href: '#' }
])

// Определение показа модалки
const isModal = ref(false)
// Зеачение для выбора контента модалки
const prod = ref(null)
const languages = reactive([
  'Ru',
  'En',
  'Esp'
])

// Выбранный язык (значение при монтировании берется или из localsrorage или первое из языковых констант. то есть если localstorage пуст, то Ru)
const selectedLang = ref('')
// Определение показа выпадашки для выбора языка
const isLang = ref(false)
// Функция показа выпадашик языков
const openLanguages = () => {
  isLang.value = !isLang.value
}
// Функция выбора языка
const closeLangugesAndSelect = (e) => {
  selectedLang.value = e.target.textContent
  localStorage.setItem('lang', e.target.textContent)
  isLang.value = false
}
// Скрытие выпадашки при клике вне ссылки выбора outside-click
const closeLanguges = () => {
  isLang.value = false
}
// Открытие модалки
const openModal = (e) => {
  isModal.value = true

}
// Скрытие модалки
const closeModal = () => {
  isModal.value = false
  prod.value = null

}

// Контент в зависимости от ссылки
const placeSlot = (e) => {
  openModal()
  if (e.target.rel === 'sub0') {
    prod.value = true

  } else {
    prod.value = false
  }

}
// Определение языка по умолчанию
onMounted(() => {
  selectedLang.value = localStorage.getItem('lang') || languages[0]
  console.log(localStorage.getItem('lang'));
})

</script>



