<script setup lang="ts">
const toggleMenu = () => {
  document.documentElement.classList.toggle('menu-open')
}
</script>

<template>
  <button class="j-mobile-menu mobile-menu" @click="toggleMenu">
    <span class="mobile-menu__item"></span>
  </button>
</template>

<style lang="scss">
$burger-size: 18px;

.mobile-menu {
  $self: &;

  cursor: pointer;
  background-color: transparent;
  padding: 0;
  width: $burger-size;
  height: $burger-size;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 0;

  @media only screen and (min-width: $lg-query) {
    display: none;
  }

  &__item {
    .menu-open & {
      opacity: 0;
      transform: rotate(-135deg);
    }
  }

  &__item,
  &::after,
  &::before {
    width: 100%;
    height: 2px;
    background-color: var(--text-color);
    border-radius: 999px;
    transition: all 0.15s ease-in-out;
    transition-property: opacity, transform;
  }

  &::after,
  &::before {
    content: '';
  }

  &::after {
    .menu-open & {
      transform: translateY(calc($burger-size / 3) * -1) rotate(-135deg);
    }
  }

  &::before {
    .menu-open & {
      transform: translateY(calc($burger-size / 3)) rotate(135deg);
    }
  }
}
</style>
