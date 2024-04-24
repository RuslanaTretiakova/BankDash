<script setup lang="ts">
import AppHeader from '@/components/app/AppHeader.vue'
import AppAside from '@/components/app/AppAside.vue'
</script>

<template>
  <div class="layout">
    <AppHeader />
    <AppAside />
    <div class="layout__container">
      <slot />
    </div>
  </div>
</template>

<style lang="scss">
.layout {
  color: black;

  &__container {
    @media only screen and (min-width: $lg-query) {
      padding-top: var(--header-height);
      padding-left: var(--aside-width);
    }
  }

  .card-container {
    padding: 1rem 1.5rem;
    height: 100vh;
    display: block;

    @media only screen and (min-width: $lg-query) {
      display: grid;
      gap: 20px;
      grid-template-columns: repeat(3, 1fr);
    }
  }
}
</style>
