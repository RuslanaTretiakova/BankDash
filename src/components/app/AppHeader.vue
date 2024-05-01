<script setup lang="ts">
import AppMobileMenu from './AppMobileMenu.vue'
import AppDropdown from './AppDropdown.vue'
import AppForm from './AppForm.vue'
</script>

<template>
  <header class="header">
    <AppMobileMenu />
    <h2 class="header__title">Overview</h2>
    <AppForm />
    <AppDropdown />
  </header>
</template>

<style lang="scss">
.header {
  padding: 1rem 1.5rem;
  position: fixed;
  z-index: 50;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  height: var(--header-height);
  border-bottom: 1px solid var(--light-color);

  @media only screen and (min-width: $lg-query) {
    left: var(--aside-width);
  }

  &__title {
    font-size: 1rem;
    color: var(--help-color-2);
    margin: 0;

    @media only screen and (min-width: $md-query) {
      font-size: 1.3rem;
    }

    @media only screen and (min-width: $lg-query) {
      font-size: 1.5rem;
    }
  }

  &__profile-button {
    cursor: pointer;
    background: none;
    padding: 0;
    border: 0;
  }

  &__profile-image {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;

    @media only screen and (min-width: $md-query) {
      width: 45px;
      height: 45px;
    }

    @media only screen and (min-width: $lg-query) {
      width: 60px;
      height: 60px;
    }
  }
}
</style>
