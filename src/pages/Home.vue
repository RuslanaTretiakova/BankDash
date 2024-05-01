<script setup lang="ts">
import WeeklyActivity from '@/components/ui/WeeklyActivity/WeeklyActivity.vue'
import BalanceHistory from '@/components/ui/BalanceHistory/BalanceHistory.vue'
import ExpenseStatistics from '@/components/ui/ExpenseStatistics/ExpenseStatistics.vue'
import QuickTransfer from '@/components/ui/QuickTransfer/QuickTransfer.vue'
</script>

<template>
  <div class="card-container">
    <section class="col-span-2">
      <h2 class="title">My Cards</h2>
      <div class="card">1</div>
    </section>
    <section>
      <h2 class="title">Recent Transaction</h2>
      <div class="card">1</div>
    </section>
    <section class="col-span-2 weekly-activity">
      <h2 class="title">Weekly Activity</h2>
      <div class="card">
        <WeeklyActivity />
      </div>
    </section>
    <section>
      <h2 class="title">Expense Statistics</h2>
      <div class="card">
        <ExpenseStatistics />
      </div>
    </section>
    <section>
      <h2 class="title">Quick transfer</h2>
      <div class="card">
        <QuickTransfer />
      </div>
    </section>
    <section class="col-span-2">
      <h2 class="title">Balance History</h2>
      <div class="card">
        <BalanceHistory />
      </div>
    </section>
  </div>
</template>

<style lang="scss">
.card {
  border-radius: 25px;
  padding: 20px;
  background-color: #fff;
}

.title {
  margin-bottom: 1rem;
  color: var(--help-color-2);
  font-size: 22px;
  font-weight: 600;
  text-align: left;
}
</style>
