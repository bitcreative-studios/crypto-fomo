import classnames from 'classnames'
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  UserCircleIcon,
  ViewGridAddIcon,
} from '@heroicons/react/outline'
import Header from '../Header'
import { BillingHistory, PaymentDetails, PlanOptions } from '../forms'

const subNavigation = [
  { name: 'Profile', href: '#', icon: UserCircleIcon, current: false },
  { name: 'Account', href: '#', icon: CogIcon, current: false },
  { name: 'Password', href: '#', icon: KeyIcon, current: false },
  { name: 'Notifications', href: '#', icon: BellIcon, current: false },
  { name: 'Plan & Billing', href: '#', icon: CreditCardIcon, current: true },
  { name: 'Integrations', href: '#', icon: ViewGridAddIcon, current: false },
]

const Dashboard = () => (
  <>
    <Header onLogin={() => {}} onLogout={() => {}} onCreateAccount={() => {}} />

    <div className="bg-gray-100 w-full">
      <main className="max-w-7xl mx-auto pb-10 lg:py-12 lg:px-8 bg-gray-100">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-5">
          <aside className="py-6 px-2 sm:px-6 lg:py-0 lg:px-0 lg:col-span-3">
            <nav className="space-y-1">
              {subNavigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classnames(
                    item.current
                      ? 'bg-gray-50 text-orange-600 hover:bg-white'
                      : 'text-gray-900 hover:text-gray-900 hover:bg-gray-50',
                    'group rounded-md px-3 py-2 flex items-center text-sm font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  <item.icon
                    className={classnames(
                      item.current
                        ? 'text-orange-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'flex-shrink-0 -ml-1 mr-3 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  <span className="truncate">{item.name}</span>
                </a>
              ))}
            </nav>
          </aside>

          {/* Payment details */}
          <div className="space-y-6 sm:px-6 lg:px-0 lg:col-span-9">
            <PaymentDetails />
            <PlanOptions />
            <BillingHistory />
          </div>
        </div>
      </main>
    </div>
  </>
)

export default Dashboard
