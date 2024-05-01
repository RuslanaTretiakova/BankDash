<script setup lang="ts">
import Card from '@/components/ui/Card.vue'
import Title from '@/components/ui/Title.vue'

import BalanceHistory from './ui/BalanceHistory.vue'
import WeeklyActivity from './ui/WeeklyActivity/WeeklyActivity.vue'
import ExpenseStatistics from './ui/ExpenseStatistics/ExpenseStatistics.vue'
import QuickTransfer from './ui/QuickTransfer/QuickTransfer.vue'
</script>

<template>
  <div class="card-container">
    <section class="col-span-2">
      <Title>My Cards</Title>
      <Card>1</Card>
    </section>
    <section>
      <Title>Recent Transaction</Title>
      <Card>1</Card>
    </section>
    <section class="col-span-2 weekly-activity">
      <Title>Weekly Activity</Title>
      <Card>
        <WeeklyActivity />
      </Card>
    </section>
    <section>
      <Title>Expense Statistics</Title>
      <Card>
        <ExpenseStatistics />
      </Card>
    </section>
    <section>
      <Title>Quick transfer</Title>
      <Card>
        <QuickTransfer />
      </Card>
    </section>
    <section class="col-span-2">
      <Title>Balance History</Title>
      <Card>
        <BalanceHistory />
      </Card>
    </section>
  </div>
</template>
