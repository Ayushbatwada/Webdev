import { TransactionComponent } from './containers/transaction/transaction.component';
import { TransactionDetailComponent } from './containers/transaction-detail/transaction-detail.component';
import { NewTransactionComponent } from './containers/new-transaction/new-transaction.component';
import { HomeComponent } from './../../containers/home/home.component';
import { TaskTrackerComponent } from './../../containers/tasks/task-tracker/task-tracker.component';

export const routes = [
  {
    path:'task-tracker',
    component:TaskTrackerComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:"transaction/history",
    component:TransactionComponent 
  },
  {
    path:"transaction/detail",
    component:TransactionDetailComponent
  },
  {
    path:"new-transaction",
    component:NewTransactionComponent
  },
]
