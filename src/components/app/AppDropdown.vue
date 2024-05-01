<template>
  <div class="dropdown">
    <button class="header__profile-button" @click="toggleDropdown">
      <img
        src="/icon/790e98129931897251abd3915a931233.jpg"
        alt="Avatar"
        class="header__profile-image"
      />
    </button>
    <div class="dropdown__content dropdown__content--right">content</div>
  </div>
</template>

<script setup lang="ts">
const toggleDropdown = () => {
  document.documentElement.classList.toggle('dropdown--open')
}
</script>

<style lang="scss">
.dropdown {
  $self: &;

  position: relative;

  &__content {
    position: absolute;
    top: 100%;
    left: 0;
    opacity: 0;
    transform: translateY(-20px);
    background: #fff;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    min-width: 200px;
    pointer-events: none;
    transition: all 0.15s ease-in-out;
    transition-property: opacity, transform;

    &--right {
      left: unset;
      right: 0;
    }

    #{$self}--open & {
      opacity: 1;
      transform: translateY(0);
      pointer-events: auto;
    }
  }
}
</style>
