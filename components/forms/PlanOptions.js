import React, { useState } from 'react'
import classnames from 'classnames'
import { RadioGroup, Switch } from '@headlessui/react'

const plans = [
  {
    name: 'Startup',
    priceMonthly: 29,
    priceYearly: 290,
    limit: 'Up to 5 active job postings',
  },
  {
    name: 'Business',
    priceMonthly: 99,
    priceYearly: 990,
    limit: 'Up to 25 active job postings',
  },
  {
    name: 'Enterprise',
    priceMonthly: 249,
    priceYearly: 2490,
    limit: 'Unlimited active job postings',
  },
]

const PlanOptions = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[1])
  const [annualBillingEnabled, setAnnualBillingEnabled] = useState(true)
  return (
    <section aria-labelledby="plan_heading">
      <form action="#" method="POST">
        <div className="shadow sm:rounded-md sm:overflow-hidden">
          <div className="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h2
                id="plan_heading"
                className="text-lg leading-6 font-medium text-gray-900"
              >
                Plan
              </h2>
            </div>

            <RadioGroup value={selectedPlan} onChange={setSelectedPlan}>
              <RadioGroup.Label className="sr-only">
                Pricing plans
              </RadioGroup.Label>
              <div className="relative bg-white rounded-md -space-y-px">
                {plans.map((plan, planIdx) => (
                  <RadioGroup.Option
                    key={plan.name}
                    value={plan}
                    className={({ checked }) =>
                      classnames(
                        planIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                        planIdx === plans.length - 1
                          ? 'rounded-bl-md rounded-br-md'
                          : '',
                        checked
                          ? 'bg-orange-50 border-orange-200 z-10'
                          : 'border-gray-200',
                        'relative border p-4 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3 focus:outline-none'
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex items-center text-sm">
                          <span
                            className={classnames(
                              checked
                                ? 'bg-orange-500 border-transparent'
                                : 'bg-white border-gray-300',
                              active
                                ? 'ring-2 ring-offset-2 ring-gray-900'
                                : '',
                              'h-4 w-4 rounded-full border flex items-center justify-center'
                            )}
                            aria-hidden="true"
                          >
                            <span className="rounded-full bg-white w-1.5 h-1.5" />
                          </span>
                          <RadioGroup.Label
                            as="span"
                            className="ml-3 font-medium text-gray-900"
                          >
                            {plan.name}
                          </RadioGroup.Label>
                        </div>
                        <RadioGroup.Description className="ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-center">
                          <span
                            className={classnames(
                              checked ? 'text-orange-900' : 'text-gray-900',
                              'font-medium'
                            )}
                          >
                            ${plan.priceMonthly} / mo
                          </span>{' '}
                          <span
                            className={
                              checked ? 'text-orange-700' : 'text-gray-500'
                            }
                          >
                            (${plan.priceYearly} / yr)
                          </span>
                        </RadioGroup.Description>
                        <RadioGroup.Description
                          className={classnames(
                            checked ? 'text-orange-700' : 'text-gray-500',
                            'ml-6 pl-1 text-sm md:ml-0 md:pl-0 md:text-right'
                          )}
                        >
                          {plan.limit}
                        </RadioGroup.Description>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>

            <Switch.Group as="div" className="flex items-center">
              <Switch
                checked={annualBillingEnabled}
                onChange={setAnnualBillingEnabled}
                className={classnames(
                  annualBillingEnabled ? 'bg-orange-500' : 'bg-gray-200',
                  'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors ease-in-out duration-200'
                )}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={classnames(
                    annualBillingEnabled ? 'translate-x-5' : 'translate-x-0',
                    'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
                  )}
                />
              </Switch>
              <Switch.Label as="span" className="ml-3">
                <span className="text-sm font-medium text-gray-900">
                  Annual billing{' '}
                </span>
                <span className="text-sm text-gray-500">(Save 10%)</span>
              </Switch.Label>
            </Switch.Group>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="bg-gray-800 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-sm font-medium text-white hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </section>
  )
}

export default PlanOptions
