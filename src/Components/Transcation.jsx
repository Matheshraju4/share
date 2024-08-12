function Transactions() {
  return (
    <div class="flex">
      <aside class="w-64 p-4 bg-gray-100">
        <nav class="space-y-4">
          <div class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-6 h-6"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
              <polyline points="9 22 9 12 15 12 15 22"></polyline>
            </svg>
            <a class="text-lg font-semibold" href="#">
              OnePay
            </a>
          </div>
          <div>
            <h3 class="text-sm font-medium text-gray-500">Dashboard</h3>
            <ul class="space-y-2">
              <li>
                <a class="flex items-center space-x-2 text-blue-600" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-5 h-5"
                  >
                    <rect width="18" height="7" x="3" y="3" rx="1"></rect>
                    <rect width="9" height="7" x="3" y="14" rx="1"></rect>
                    <rect width="5" height="7" x="16" y="14" rx="1"></rect>
                  </svg>
                  <span>Transactions</span>
                </a>
              </li>
              <li>
                <a class="flex items-center space-x-2" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-5 h-5"
                  >
                    <line x1="12" x2="12" y1="2" y2="22"></line>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                  <span>Deposit</span>
                </a>
              </li>
              <li>
                <a class="flex items-center space-x-2" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-5 h-5"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                  <span>Transfer</span>
                </a>
              </li>
              <li>
                <a class="flex items-center space-x-2" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-5 h-5"
                  >
                    <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                    <line x1="2" x2="22" y1="10" y2="10"></line>
                  </svg>
                  <span>Payment</span>
                </a>
              </li>
              <li>
                <a class="flex items-center space-x-2" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-5 h-5"
                  >
                    <path d="m12 19-7-7 7-7"></path>
                    <path d="M19 12H5"></path>
                  </svg>
                  <span>Withdraw</span>
                </a>
              </li>
              <li>
                <a class="flex items-center space-x-2" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-5 h-5"
                  >
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a class="flex items-center space-x-2" href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="w-5 h-5"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16 17 21 12 16 7"></polyline>
                    <line x1="21" x2="9" y1="12" y2="12"></line>
                  </svg>
                  <span>Log out</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
      <main class="flex-1 p-4">
        <div class="flex items-center justify-between pb-4 border-b">
          <h2 class="text-2xl font-semibold">Transactions</h2>
          <div class="flex items-center space-x-4">
            <span class="text-lg font-medium">Balance: $5,382.36 USD</span>
            <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
                U
              </span>
            </span>
          </div>
        </div>
        <div class="flex items-center justify-between py-4">
          <div class="flex space-x-2">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              All
            </button>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Received
            </button>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Transfer
            </button>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Payment
            </button>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Withdraw
            </button>
          </div>
          <div class="flex items-center space-x-2">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              Past 90 Days
            </button>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              17 Jun 2021
            </button>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
              15 Sep 2021
            </button>
          </div>
        </div>
        <div class="relative w-full overflow-auto">
          <table class="w-full caption-bottom text-sm">
            <thead class="[&amp;_tr]:border-b">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Name/Business
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Date
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Invoice ID
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Amount
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Status
                </th>
                <th class="h-12 px-4 text-left align-middle font-medium text-muted-foreground [&amp;:has([role=checkbox])]:pr-0">
                  Action
                </th>
              </tr>
            </thead>
            <tbody class="[&amp;_tr:last-child]:border-0">
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center space-x-2">
                  <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      WM
                    </span>
                  </span>
                  <div>
                    <div class="font-medium">William Mardoch</div>
                    <div class="text-sm text-muted-foreground">
                      ID: 25014827
                    </div>
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>21 March 2021</div>
                  <div class="text-sm text-muted-foreground">At 8:45 PM</div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  OP0124784
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  $250 USD
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    Receive
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Details
                  </button>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center space-x-2">
                  <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      JD
                    </span>
                  </span>
                  <div>
                    <div class="font-medium">Jack Dawson</div>
                    <div class="text-sm text-muted-foreground">
                      ID: 22154879
                    </div>
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>20 March 2021</div>
                  <div class="text-sm text-muted-foreground">At 9:28 AM</div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  OP0124784
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  -$20 USD
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80"
                    data-v0-t="badge"
                  >
                    Transfer
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Details
                  </button>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center space-x-2">
                  <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      MC
                    </span>
                  </span>
                  <div>
                    <div class="font-medium">Mailchimp</div>
                    <div class="text-sm text-muted-foreground">
                      Subscription service
                    </div>
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>19 March 2021</div>
                  <div class="text-sm text-muted-foreground">At 7:21 PM</div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  OP87452148
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  -$80 USD
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    Payment
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Details
                  </button>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center space-x-2">
                  <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      FV
                    </span>
                  </span>
                  <div>
                    <div class="font-medium">Fiverr</div>
                    <div class="text-sm text-muted-foreground">Marketplace</div>
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>18 March 2021</div>
                  <div class="text-sm text-muted-foreground">At 7:21 PM</div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  OP32201425
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  $100 USD
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    Receive
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Details
                  </button>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center space-x-2">
                  <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      BA
                    </span>
                  </span>
                  <div>
                    <div class="font-medium">BANK OF AMERICA LTD.</div>
                    <div class="text-sm text-muted-foreground">
                      Bank Withdraw
                    </div>
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>10 March 2021</div>
                  <div class="text-sm text-muted-foreground">At 7:21 PM</div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  OP34012458
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  $210 USD
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80"
                    data-v0-t="badge"
                  >
                    Withdraw
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Details
                  </button>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center space-x-2">
                  <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      PJ
                    </span>
                  </span>
                  <div>
                    <div class="font-medium">Peter Jacky</div>
                    <div class="text-sm text-muted-foreground">
                      ID: 28721547
                    </div>
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>10 March 2021</div>
                  <div class="text-sm text-muted-foreground">At 7:21 PM</div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  OP0124784
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  -$80 USD
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    Payment
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Details
                  </button>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center space-x-2">
                  <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      EC
                    </span>
                  </span>
                  <div>
                    <div class="font-medium">EBL Credit Card</div>
                    <div class="text-sm text-muted-foreground">Add money</div>
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>10 March 2021</div>
                  <div class="text-sm text-muted-foreground">At 7:21 PM</div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  OP21547895
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  $160 USD
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    Deposit
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Details
                  </button>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center space-x-2">
                  <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      AJ
                    </span>
                  </span>
                  <div>
                    <div class="font-medium">Angelina Juli</div>
                    <div class="text-sm text-muted-foreground">
                      ID: 22154875
                    </div>
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>05 March 2021</div>
                  <div class="text-sm text-muted-foreground">At 7:21 PM</div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  OP21547854
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  $100 USD
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    Receive
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Details
                  </button>
                </td>
              </tr>
              <tr class="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted">
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0 flex items-center space-x-2">
                  <span class="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <span class="flex h-full w-full items-center justify-center rounded-full bg-muted">
                      DW
                    </span>
                  </span>
                  <div>
                    <div class="font-medium">David William</div>
                    <div class="text-sm text-muted-foreground">
                      ID: 22154875
                    </div>
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div>05 March 2021</div>
                  <div class="text-sm text-muted-foreground">At 7:21 PM</div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  OP21547854
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  $100 USD
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <div
                    class="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    data-v0-t="badge"
                  >
                    Receive
                  </div>
                </td>
                <td class="p-4 align-middle [&amp;:has([role=checkbox])]:pr-0">
                  <button class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Details
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Transactions;
