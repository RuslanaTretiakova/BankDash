<template>
  <ul class="navigation">
    <li class="navigation__item">
      <RouterLink class="navigation__link" to="/">
        <span>
          <i class="ri-home-4-fill"></i>
        </span>
        Dashboard
      </RouterLink>
    </li>
    <li class="navigation__item">
      <RouterLink class="navigation__link" to="/transactions">
        <span>
          <i class="ri-money-dollar-box-fill"></i>
        </span>
        Transactions
      </RouterLink>
    </li>
    <li class="navigation__item">
      <RouterLink class="navigation__link" to="/accounts">
        <span>
          <i class="ri-user-3-fill"></i>
        </span>
        Accounts
      </RouterLink>
    </li>
    <li class="navigation__item">
      <a class="navigation__link" href="#">
        <span>
          <i class="ri-home-4-fill"></i>
        </span>
        Investments
      </a>
    </li>
    <li class="navigation__item">
      <a class="navigation__link" href="#">
        <span>
          <i class="ri-bank-card-fill"></i>
        </span>
        Credit Cards
      </a>
    </li>
    <li class="navigation__item">
      <a class="navigation__link" href="#">
        <span>
          <i class="ri-hand-coin-fill"></i>
        </span>
        Loans
      </a>
    </li>
    <li class="navigation__item">
      <a class="navigation__link" href="#">
        <span>
          <i class="ri-tools-fill"></i>
        </span>
        Services
      </a>
    </li>
    <li class="navigation__item">
      <a class="navigation__link" href="#">
        <span>
          <i class="ri-lightbulb-line"></i>
        </span>
        My Privileges
      </a>
    </li>
    <li class="navigation__item">
      <a class="navigation__link" href="#">
        <span>
          <i class="ri-settings-4-fill"></i>
        </span>
        Setting
      </a>
    </li>
  </ul>
</template>

<style lang="scss">
.navigation {
  list-style: none;
  padding: 0;
  margin: 0;

  &__link {
    display: block;
    position: relative;
    gap: 10px;
    font-size: 0.8rem;
    padding: 1rem 0 0.7rem calc(var(--aside-width) / 5.5);
    text-decoration: none;
    opacity: 0.5;

    @media only screen and (min-width: $md-query) {
      font-size: 1rem;
    }

    &:hover {
      color: var(--primary-color);
      opacity: 1;
    }

    &::after {
      content: '';
      left: 0;
      position: absolute;
      width: 0.3rem;
      top: 0;
      bottom: 0;
      border-radius: 0 0.7rem 0.7rem 0;
    }

    &:hover::after {
      background-color: var(--primary-color);
    }
  }
}
</style>
