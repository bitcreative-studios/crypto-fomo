import React from 'react'
import { QuestionMarkCircleIcon } from '@heroicons/react/solid'

const PaymentDetails = () => (
  <section aria-labelledby="payment_details_heading">
    <form action="#" method="POST">
      <div className="shadow sm:rounded-md sm:overflow-hidden">
        <div className="bg-white py-6 px-4 sm:p-6">
          <div>
            <h2
              id="payment_details_heading"
              className="text-lg leading-6 font-medium text-gray-900"
            >
              Payment details
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Update your billing information. Please note that updating your
              location could affect your tax rates.
            </p>
          </div>

          <div className="mt-6 grid grid-cols-4 gap-6">
            <div className="col-span-4 sm:col-span-2">
              <label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                autoComplete="cc-given-name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>

            <div className="col-span-4 sm:col-span-2">
              <label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                autoComplete="cc-family-name"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>

            <div className="col-span-4 sm:col-span-2">
              <label
                htmlFor="email_address"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="text"
                name="email_address"
                id="email_address"
                autoComplete="email"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>

            <div className="col-span-4 sm:col-span-1">
              <label
                htmlFor="expiration_date"
                className="block text-sm font-medium text-gray-700"
              >
                Expration date
              </label>
              <input
                type="text"
                name="expiration_date"
                id="expiration_date"
                autoComplete="cc-exp"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
                placeholder="MM / YY"
              />
            </div>

            <div className="col-span-4 sm:col-span-1">
              <label
                htmlFor="security_code"
                className="flex items-center text-sm font-medium text-gray-700"
              >
                <span>Security code</span>
                <QuestionMarkCircleIcon
                  className="ml-1 flex-shrink-0 h-5 w-5 text-gray-300"
                  aria-hidden="true"
                />
              </label>
              <input
                type="text"
                name="security_code"
                id="security_code"
                autoComplete="cc-csc"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>

            <div className="col-span-4 sm:col-span-2">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country / Region
              </label>
              <select
                id="country"
                name="country"
                autoComplete="country"
                className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>Mexico</option>
              </select>
            </div>

            <div className="col-span-4 sm:col-span-2">
              <label
                htmlFor="postal_code"
                className="block text-sm font-medium text-gray-700"
              >
                ZIP / Postal
              </label>
              <input
                type="text"
                name="postal_code"
                id="postal_code"
                autoComplete="postal-code"
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-gray-900 focus:border-gray-900 sm:text-sm"
              />
            </div>
          </div>
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

export default PaymentDetails
