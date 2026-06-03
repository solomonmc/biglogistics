const roles = [
  { id: "customer", label: "Customer", icon: "bi-person" },
  { id: "driver", label: "Driver", icon: "bi-truck" },
  { id: "admin", label: "Admin", icon: "bi-speedometer2" }
];

const navItems = {
  customer: [
    { view: "customer-home", label: "Home", icon: "bi-house" },
    { view: "customer-book", label: "Book", icon: "bi-plus-circle" },
    { view: "customer-tracking", label: "Track", icon: "bi-map" },
    { view: "customer-orders", label: "Orders", icon: "bi-receipt" },
    { view: "customer-support", label: "Help", icon: "bi-chat-dots" }
  ],
  driver: [
    { view: "driver-home", label: "Today", icon: "bi-speedometer" },
    { view: "driver-jobs", label: "Jobs", icon: "bi-list-check" },
    { view: "driver-route", label: "Route", icon: "bi-signpost-split" },
    { view: "driver-proof", label: "POD", icon: "bi-clipboard-check" },
    { view: "driver-wallet", label: "Wallet", icon: "bi-wallet2" }
  ],
  admin: [
    { view: "admin-dashboard", label: "Ops", icon: "bi-grid" },
    { view: "admin-live", label: "Live", icon: "bi-broadcast" },
    { view: "admin-assign", label: "Assign", icon: "bi-diagram-3" },
    { view: "admin-drivers", label: "Fleet", icon: "bi-people" },
    { view: "admin-customers", label: "CRM", icon: "bi-person-lines-fill" }
  ]
};

const screenTitles = {
  auth: "Sign in",
  "customer-home": "Customer",
  "customer-book": "New delivery",
  "customer-tracking": "Tracking",
  "customer-orders": "Shipments",
  "customer-support": "Support",
  "driver-home": "Driver",
  "driver-jobs": "Job offers",
  "driver-route": "Route",
  "driver-proof": "POD",
  "driver-wallet": "Wallet",
  "admin-dashboard": "Admin",
  "admin-live": "Live jobs",
  "admin-assign": "Assign",
  "admin-drivers": "Drivers",
  "admin-customers": "Customers",
  "admin-issues": "Alerts"
};

const statusFlow = ["Booked", "Assigned", "Picked up", "En route", "Delivered"];

const drivers = [
  {
    id: "drv-kunle",
    name: "Kunle Adebayo",
    initials: "KA",
    vehicle: "Bike",
    plate: "LSR 384 QD",
    area: "Lekki",
    status: "online",
    rating: 4.9,
    jobs: 2,
    distance: 1.6,
    capacity: 72,
    earnings: 36800,
    phone: "0803 445 2100"
  },
  {
    id: "drv-ada",
    name: "Ada Nwosu",
    initials: "AN",
    vehicle: "Van",
    plate: "KJA 210 BX",
    area: "Ikeja",
    status: "online",
    rating: 4.8,
    jobs: 1,
    distance: 3.1,
    capacity: 48,
    earnings: 41500,
    phone: "0812 991 4405"
  },
  {
    id: "drv-musa",
    name: "Musa Bello",
    initials: "MB",
    vehicle: "Bike",
    plate: "BDG 914 QW",
    area: "Yaba",
    status: "online",
    rating: 4.7,
    jobs: 3,
    distance: 2.4,
    capacity: 88,
    earnings: 29200,
    phone: "0706 118 7024"
  },
  {
    id: "drv-emeka",
    name: "Emeka Obi",
    initials: "EO",
    vehicle: "Truck",
    plate: "EKY 762 LM",
    area: "Apapa",
    status: "offline",
    rating: 4.6,
    jobs: 0,
    distance: 6.8,
    capacity: 20,
    earnings: 18400,
    phone: "0902 400 3391"
  }
];

const shipments = [
  {
    id: "BLG-4821",
    customer: "Amara Okafor",
    phone: "0802 118 5530",
    pickup: "12 Admiralty Way, Lekki",
    dropoff: "Plot 8 Allen Avenue, Ikeja",
    package: "Small parcel",
    speed: "Express",
    amount: 18500,
    status: "En route",
    eta: 22,
    driverId: "drv-kunle",
    progress: 58,
    distance: "18.4 km",
    priority: "Express",
    created: "10:24 AM"
  },
  {
    id: "BLG-4819",
    customer: "Tomi Martins",
    phone: "0815 444 9900",
    pickup: "Maryland Mall, Maryland",
    dropoff: "Freedom Way, Lekki Phase 1",
    package: "Documents",
    speed: "Priority",
    amount: 14200,
    status: "Assigned",
    eta: 34,
    driverId: "drv-ada",
    progress: 18,
    distance: "23.1 km",
    priority: "Priority",
    created: "09:48 AM"
  },
  {
    id: "BLG-4816",
    customer: "Nova Foods",
    phone: "0701 209 7788",
    pickup: "Commercial Avenue, Yaba",
    dropoff: "Akin Adesola, Victoria Island",
    package: "Food pack",
    speed: "Express",
    amount: 12600,
    status: "Delivered",
    eta: 0,
    driverId: "drv-musa",
    progress: 100,
    distance: "10.8 km",
    priority: "Express",
    created: "Yesterday"
  },
  {
    id: "BLG-4814",
    customer: "Bridge Pharmacy",
    phone: "0901 284 5560",
    pickup: "Bode Thomas, Surulere",
    dropoff: "Allen Avenue, Ikeja",
    package: "Fragile item",
    speed: "Standard",
    amount: 10800,
    status: "Delayed",
    eta: 46,
    driverId: "drv-kunle",
    progress: 41,
    distance: "15.6 km",
    priority: "Standard",
    created: "Yesterday"
  }
];

const assignmentQueue = [
  {
    id: "BLG-4830",
    customer: "Prime Gadgets",
    phone: "0814 220 9932",
    pickup: "Computer Village, Ikeja",
    dropoff: "Chevron Drive, Lekki",
    package: "Fragile item",
    speed: "Priority",
    amount: 21600,
    distance: 20.7,
    requiredVehicle: "Bike",
    priority: "Priority"
  },
  {
    id: "BLG-4831",
    customer: "MedPlus",
    phone: "0808 400 1280",
    pickup: "Adeniyi Jones, Ikeja",
    dropoff: "Festac Link Road",
    package: "Documents",
    speed: "Express",
    amount: 14800,
    distance: 16.9,
    requiredVehicle: "Bike",
    priority: "Express"
  },
  {
    id: "BLG-4832",
    customer: "Market Hub",
    phone: "0703 902 6001",
    pickup: "Oshodi Terminal",
    dropoff: "Apapa Wharf",
    package: "Bulk carton",
    speed: "Standard",
    amount: 32000,
    distance: 11.4,
    requiredVehicle: "Truck",
    priority: "Standard"
  }
];

const customers = [
  { name: "Amara Okafor", location: "Lekki", shipments: 8, spend: 148000, tag: "VIP" },
  { name: "Tomi Martins", location: "Ikeja", shipments: 5, spend: 93200, tag: "Repeat" },
  { name: "Nova Foods", location: "Yaba", shipments: 16, spend: 244600, tag: "Business" },
  { name: "Bridge Pharmacy", location: "Surulere", shipments: 11, spend: 189400, tag: "Priority" }
];

const issues = [
  { id: "ISS-110", title: "BLG-4814 delayed", detail: "Traffic hold at Ojuelegba", level: "Delayed", open: true },
  { id: "ISS-109", title: "Payment pending", detail: "Transfer confirmation for BLG-4824", level: "Alert", open: true },
  { id: "ISS-108", title: "Driver document check", detail: "Plate renewal due for EO", level: "Neutral", open: false }
];

const supportMessages = [
  { from: "agent", text: "Hi Amara. Your rider is moving toward Ikeja.", time: "10:41 AM" },
  { from: "me", text: "Can the receiver pay on delivery?", time: "10:42 AM" },
  { from: "agent", text: "Yes. Cash, transfer, and POS are available.", time: "10:43 AM" }
];

const state = {
  authenticated: false,
  loginRole: "admin",
  role: "customer",
  view: "customer-home",
  theme: localStorage.getItem("biglogistics-theme") || "light",
  activeShipmentId: "BLG-4821",
  customerFilter: "All",
  adminFilter: "All",
  selectedQueueId: "BLG-4830",
  assignmentResult: null,
  driverAvailable: true,
  proofCompleted: false
};

const money = (value) => `NGN ${Number(value).toLocaleString("en-NG")}`;

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => (
    {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;"
    }[char]
  ));
}

function nowTime() {
  return new Date().toLocaleTimeString("en-NG", {
    hour: "numeric",
    minute: "2-digit"
  });
}

function normalizeStatus(status) {
  return String(status).toLowerCase().replace(/\s+/g, "");
}

function driverById(id) {
  return drivers.find((driver) => driver.id === id);
}

function shipmentById(id) {
  return shipments.find((shipment) => shipment.id === id);
}

function activeShipment() {
  return shipmentById(state.activeShipmentId) || shipments.find((shipment) => shipment.status !== "Delivered") || shipments[0];
}

function activeDriver() {
  return driverById("drv-kunle");
}

function driverActiveShipment() {
  const driver = activeDriver();
  return shipments.find((shipment) => shipment.driverId === driver.id && shipment.status !== "Delivered") || activeShipment();
}

function defaultViewForRole(role) {
  return navItems[role][0].view;
}

function viewBelongsToRole(view, role) {
  return navItems[role].some((item) => item.view === view) || (role === "admin" && view === "admin-issues");
}

function showToast(message) {
  const toastEl = document.getElementById("appToast");
  const body = document.getElementById("toastBody");
  body.textContent = message;

  if (window.bootstrap && window.bootstrap.Toast) {
    window.bootstrap.Toast.getOrCreateInstance(toastEl, { delay: 2200 }).show();
    return;
  }

  toastEl.classList.add("show");
  window.setTimeout(() => toastEl.classList.remove("show"), 2200);
}

function setTheme(theme) {
  state.theme = theme;
  document.body.dataset.theme = theme;
  localStorage.setItem("biglogistics-theme", theme);
  const icon = document.querySelector("#themeToggle i");
  if (icon) {
    icon.className = `bi ${theme === "dark" ? "bi-sun" : "bi-moon-stars"}`;
  }
}

function setRole(role) {
  state.role = role;
  if (!viewBelongsToRole(state.view, role)) {
    state.view = defaultViewForRole(role);
  }
  syncApp(true);
}

function login(role) {
  state.authenticated = true;
  state.role = role;
  state.view = defaultViewForRole(role);
  syncApp(true);
  showToast(`${roles.find((item) => item.id === role).label} preview opened`);
}

function routeTo(view) {
  const role = roles.find((item) => viewBelongsToRole(view, item.id));
  if (role && role.id !== state.role) {
    state.role = role.id;
  }
  state.view = view;
  syncApp(true);
}

function syncApp(scrollTop = false) {
  document.body.classList.toggle("is-authenticated", state.authenticated);
  document.getElementById("authView").classList.toggle("active", !state.authenticated);

  document.querySelectorAll(".role-panel").forEach((panel) => {
    panel.classList.toggle("active", state.authenticated && panel.dataset.rolePanel === state.role);
  });

  document.querySelectorAll(".role-panel").forEach((panel) => {
    panel.querySelectorAll(".view").forEach((view) => {
      view.classList.toggle("active", panel.dataset.rolePanel === state.role && view.dataset.view === state.view);
    });
  });

  document.getElementById("screenTitle").textContent = state.authenticated
    ? screenTitles[state.view] || "Preview"
    : screenTitles.auth;

  renderAll();
  renderRoleTabs();
  renderBottomNav();

  if (scrollTop) {
    document.getElementById("appMain").scrollTo({ top: 0, behavior: "smooth" });
  }
}

function renderRoleTabs() {
  document.getElementById("roleTabs").innerHTML = roles
    .map((role) => `
      <button class="role-tab ${state.role === role.id ? "active" : ""}" type="button" data-role="${role.id}">
        <i class="bi ${role.icon}" aria-hidden="true"></i>
        <span>${role.label}</span>
      </button>
    `)
    .join("");
}

function renderBottomNav() {
  const nav = document.getElementById("bottomNav");
  const items = navItems[state.role] || [];
  nav.style.gridTemplateColumns = `repeat(${items.length}, 1fr)`;
  nav.innerHTML = items
    .map((item) => {
      const badge = item.view === "admin-issues" ? openIssues().length : 0;
      return `
        <button class="nav-item ${state.view === item.view ? "active" : ""}" type="button" data-route="${item.view}">
          <i class="bi ${item.icon}" aria-hidden="true"></i>
          <span>${item.label}</span>
          ${badge ? `<span class="nav-badge">${badge}</span>` : ""}
        </button>
      `;
    })
    .join("");
}

function renderAll() {
  renderAuthRoles();
  renderCustomer();
  renderDriver();
  renderAdmin();
}

function renderAuthRoles() {
  document.getElementById("demoRoles").innerHTML = roles
    .map((role) => `
      <button class="demo-role ${state.loginRole === role.id ? "active" : ""}" type="button" data-login-role="${role.id}">
        <i class="bi ${role.icon}" aria-hidden="true"></i>
        ${role.label}
      </button>
    `)
    .join("");
}

function statusStage(status) {
  const index = statusFlow.indexOf(status);
  if (index >= 0) return index;
  if (status === "Delayed") return 3;
  return 0;
}

function timelineMarkup(shipment) {
  const stage = statusStage(shipment.status);
  return `
    <div class="timeline">
      ${statusFlow.map((label, index) => {
        const stateClass = index < stage || shipment.status === "Delivered" ? "done" : index === stage ? "active" : "";
        const icon = index < stage || shipment.status === "Delivered" ? "bi-check2" : index === stage ? "bi-dot" : "bi-circle";
        return `
          <div class="timeline-row ${stateClass}">
            <span class="timeline-dot"><i class="bi ${icon}" aria-hidden="true"></i></span>
            <div>
              <strong>${label}</strong>
              <p class="muted-text">${timelineSubcopy(label, shipment)}</p>
            </div>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

function timelineSubcopy(label, shipment) {
  const driver = driverById(shipment.driverId);
  const copy = {
    Booked: `${shipment.created} . ${shipment.package}`,
    Assigned: driver ? `${driver.name} . ${driver.vehicle}` : "Waiting for driver",
    "Picked up": "Package confirmed",
    "En route": shipment.eta ? `${shipment.eta} min ETA` : "Approaching destination",
    Delivered: shipment.status === "Delivered" ? "Receiver confirmed" : "Pending receiver"
  };
  return copy[label] || "";
}

function mapMarkup(shipment, options = {}) {
  const compact = options.compact ? "compact" : "";
  const driver = driverById(shipment.driverId);
  const progress = Math.min(100, Math.max(0, shipment.progress));
  const x = 16 + progress * 0.58;
  const y = 62 - progress * 0.34;

  return `
    <div class="map-card ${compact}">
      <div class="map-head">
        <div>
          <span class="mini-label">${escapeHtml(shipment.id)}</span>
          <h3>${escapeHtml(shipment.status)}</h3>
        </div>
        <span class="status-pill ${normalizeStatus(shipment.status)}">${escapeHtml(shipment.eta ? `${shipment.eta} min` : "Done")}</span>
      </div>
      <div class="map-canvas">
        <span class="route-path"></span>
        <span class="map-pin pickup"><i class="bi bi-box-seam" aria-hidden="true"></i></span>
        <span class="map-pin dropoff"><i class="bi bi-geo-alt" aria-hidden="true"></i></span>
        <span class="map-van" style="--van-x: ${x}%; --van-y: ${y}%">
          <i class="bi bi-truck" aria-hidden="true"></i>
        </span>
      </div>
      <div class="map-meta">
        <span><strong>${escapeHtml(driver ? driver.name.split(" ")[0] : "Queue")}</strong>Driver</span>
        <span><strong>${escapeHtml(shipment.distance)}</strong>Distance</span>
        <span><strong>${escapeHtml(shipment.priority)}</strong>Speed</span>
      </div>
    </div>
  `;
}

function routePairMarkup(item) {
  return `
    <div class="route-pair">
      <div class="route-line-item">
        <span class="route-icon"><i class="bi bi-arrow-up-right" aria-hidden="true"></i></span>
        <span class="route-copy">
          <strong>${escapeHtml(item.pickup)}</strong>
          <span class="muted-text">Pickup</span>
        </span>
      </div>
      <div class="route-line-item">
        <span class="route-icon drop"><i class="bi bi-geo-alt" aria-hidden="true"></i></span>
        <span class="route-copy">
          <strong>${escapeHtml(item.dropoff)}</strong>
          <span class="muted-text">Drop-off</span>
        </span>
      </div>
    </div>
  `;
}

function shipmentCard(shipment, options = {}) {
  const driver = driverById(shipment.driverId);
  const compact = options.compact;
  return `
    <article class="shipment-card">
      <div class="shipment-head">
        <div>
          <h3>${escapeHtml(shipment.id)}</h3>
          <p>${escapeHtml(shipment.customer)} . ${escapeHtml(shipment.package)}</p>
        </div>
        <span class="status-pill ${normalizeStatus(shipment.status)}">${escapeHtml(shipment.status)}</span>
      </div>
      ${compact ? "" : routePairMarkup(shipment)}
      <div class="job-meta-grid">
        <span><strong>${money(shipment.amount)}</strong>Fee</span>
        <span><strong>${shipment.eta ? `${shipment.eta}m` : "Done"}</strong>ETA</span>
        <span><strong>${escapeHtml(driver ? driver.initials : "NA")}</strong>Driver</span>
      </div>
      <div class="card-actions">
        <button class="btn btn-dark flex-fill" type="button" data-track-shipment="${shipment.id}">Track</button>
        <button class="btn btn-outline-dark flex-fill" type="button" data-route="customer-support">Support</button>
      </div>
    </article>
  `;
}

function renderCustomer() {
  const shipment = activeShipment();

  document.getElementById("customerHero").innerHTML = `
    <span class="mini-label">Same-day Lagos dispatch</span>
    <h2>Move packages without calls.</h2>
    <p>Book, pay, track, and chat with dispatch in one mobile flow.</p>
    <div class="hero-actions">
      <button class="btn btn-light" type="button" data-route="customer-book">
        <i class="bi bi-plus-lg" aria-hidden="true"></i> New delivery
      </button>
      <button class="btn btn-outline-light" type="button" data-route="customer-tracking">
        <i class="bi bi-map" aria-hidden="true"></i> Track ${escapeHtml(shipment.id)}
      </button>
    </div>
  `;

  document.getElementById("customerQuickActions").innerHTML = [
    { label: "Quote", icon: "bi-calculator", view: "customer-book" },
    { label: "Track", icon: "bi-geo", view: "customer-tracking" },
    { label: "History", icon: "bi-receipt", view: "customer-orders" },
    { label: "Support", icon: "bi-headset", view: "customer-support" }
  ]
    .map((action) => `
      <button class="quick-action" type="button" data-route="${action.view}">
        <i class="bi ${action.icon}" aria-hidden="true"></i>
        ${action.label}
      </button>
    `)
    .join("");

  document.getElementById("customerTrackingPreview").innerHTML = mapMarkup(shipment, { compact: true });
  document.getElementById("customerRecentOrders").innerHTML = shipments.slice(0, 2).map((item) => shipmentCard(item, { compact: true })).join("");
  renderCustomerBook();
  renderCustomerTracking();
  renderCustomerOrders();
  renderCustomerSupport();
}

function calculateQuote() {
  const type = document.getElementById("packageType")?.value || "Small parcel";
  const speed = document.getElementById("deliverySpeed")?.value || "Express";
  const typeFees = {
    Documents: 2600,
    "Small parcel": 4200,
    "Food pack": 3800,
    "Fragile item": 6200,
    "Bulk carton": 11800
  };
  const speedFees = {
    Standard: 0,
    Express: 3500,
    Priority: 6900
  };
  const routeFee = 7800;
  const protection = type === "Fragile item" || type === "Bulk carton" ? 2200 : 900;
  const total = routeFee + (typeFees[type] || 4200) + (speedFees[speed] || 0) + protection;
  return { routeFee, typeFee: typeFees[type] || 4200, speedFee: speedFees[speed] || 0, protection, total };
}

function renderCustomerBook() {
  const quote = calculateQuote();
  document.getElementById("quoteCard").innerHTML = `
    <div class="quote-total">
      <div>
        <span class="mini-label">Estimate</span>
        <strong>${money(quote.total)}</strong>
      </div>
      <span class="status-pill paid">Auto quote</span>
    </div>
    <div class="price-breakdown">
      <div><span>Route</span><strong>${money(quote.routeFee)}</strong></div>
      <div><span>Package</span><strong>${money(quote.typeFee)}</strong></div>
      <div><span>Speed</span><strong>${money(quote.speedFee)}</strong></div>
      <div><span>Protection</span><strong>${money(quote.protection)}</strong></div>
    </div>
    <button class="btn btn-dark w-100 primary-action" type="submit">Book delivery</button>
  `;
}

function renderCustomerTracking() {
  const shipment = activeShipment();
  const driver = driverById(shipment.driverId);
  document.getElementById("customerTrackingFull").innerHTML = `
    ${mapMarkup(shipment)}
    <div class="driver-card mt-3">
      <span class="avatar">${escapeHtml(driver ? driver.initials : "NA")}</span>
      <div>
        <h3>${escapeHtml(driver ? driver.name : "Awaiting driver")}</h3>
        <p>${driver ? `${driver.vehicle} . ${driver.plate}` : "Auto assignment pending"}</p>
      </div>
      <span class="status-pill ${driver?.status || "neutral"}">${driver ? driver.rating : "NA"}</span>
    </div>
    ${timelineMarkup(shipment)}
  `;
}

function renderCustomerOrders() {
  const filters = ["All", "Assigned", "En route", "Delivered", "Delayed"];
  document.getElementById("customerOrderFilters").innerHTML = filters
    .map((filter) => `
      <button class="chip ${state.customerFilter === filter ? "active" : ""}" type="button" data-customer-filter="${filter}">
        ${filter}
      </button>
    `)
    .join("");

  const matches = shipments.filter((shipment) => state.customerFilter === "All" || shipment.status === state.customerFilter);
  document.getElementById("customerOrderList").innerHTML = matches.length
    ? matches.map((shipment) => shipmentCard(shipment)).join("")
    : emptyState("bi-receipt", "No shipments here.");
}

function renderCustomerSupport() {
  document.getElementById("customerSupportPanel").innerHTML = `
    <div class="chat-shell">
      <div class="chat-profile">
        <span class="avatar">BL</span>
        <div>
          <h2>Biglogistics Desk</h2>
          <p>Online . dispatch support</p>
        </div>
        <span class="status-pill paid">Live</span>
      </div>
      <div class="chat-messages">
        ${supportMessages.map((message) => messageBubble(message, { me: "outgoing", agent: "incoming" })).join("")}
      </div>
      <div class="quick-replies">
        <button type="button" data-chat-quick="Where is my rider?">Rider</button>
        <button type="button" data-chat-quick="Change drop-off address">Change address</button>
        <button type="button" data-chat-quick="Send receiver phone number">Receiver</button>
      </div>
      <form class="chat-composer" id="supportForm">
        <input id="supportInput" type="text" placeholder="Message dispatch" autocomplete="off">
        <button type="submit" aria-label="Send message">
          <i class="bi bi-send" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  `;
}

function messageBubble(message, ownerMap) {
  const side = ownerMap[message.from] || "incoming";
  return `
    <div class="message-row ${side}">
      <div class="message-bubble">
        <p>${escapeHtml(message.text)}</p>
        <span>${escapeHtml(message.time)}</span>
      </div>
    </div>
  `;
}

function createBooking() {
  const quote = calculateQuote();
  const pickup = document.getElementById("pickupAddress").value.trim() || "Pickup address";
  const dropoff = document.getElementById("dropoffAddress").value.trim() || "Drop-off address";
  const packageType = document.getElementById("packageType").value;
  const speed = document.getElementById("deliverySpeed").value;
  const driver = bestDriverFor({
    requiredVehicle: packageType === "Bulk carton" ? "Truck" : "Bike",
    distance: 12,
    priority: speed
  });
  const nextNumber = 4833 + shipments.length;
  const shipment = {
    id: `BLG-${nextNumber}`,
    customer: "Demo Customer",
    phone: "0800 000 0000",
    pickup,
    dropoff,
    package: packageType,
    speed,
    amount: quote.total,
    status: driver ? "Assigned" : "Booked",
    eta: speed === "Priority" ? 18 : speed === "Express" ? 26 : 42,
    driverId: driver?.id,
    progress: driver ? 12 : 0,
    distance: "14.2 km",
    priority: speed,
    created: nowTime()
  };
  shipments.unshift(shipment);
  state.activeShipmentId = shipment.id;
  if (driver) {
    driver.jobs += 1;
    driver.capacity = Math.min(96, driver.capacity + 8);
  }
  routeTo("customer-tracking");
  showToast(driver ? `Assigned to ${driver.name}` : "Booking queued");
}

function renderDriver() {
  const driver = activeDriver();
  const active = driverActiveShipment();
  document.getElementById("availabilityToggle").classList.toggle("is-online", state.driverAvailable);
  renderDriverMetrics(driver);
  renderDriverActiveCard(active);
  renderDriverJobs();
  renderDriverRoute(active);
  renderDriverWallet(driver);
}

function renderDriverMetrics(driver) {
  const completed = shipments.filter((shipment) => shipment.driverId === driver.id && shipment.status === "Delivered").length;
  const open = shipments.filter((shipment) => shipment.driverId === driver.id && shipment.status !== "Delivered").length;
  document.getElementById("driverMetrics").innerHTML = [
    { label: "Earnings", value: money(driver.earnings), icon: "bi-cash-stack" },
    { label: "Open jobs", value: open, icon: "bi-box-seam" },
    { label: "Completed", value: completed, icon: "bi-check2-circle" },
    { label: "Rating", value: driver.rating, icon: "bi-star" }
  ]
    .map(metricCard)
    .join("");
}

function renderDriverActiveCard(shipment) {
  document.getElementById("driverActiveCard").innerHTML = `
    <div class="section-heading">
      <div>
        <span class="mini-label">Now</span>
        <h2>Active route</h2>
      </div>
      <button class="link-button" type="button" data-route="driver-route">Open</button>
    </div>
    ${shipment ? driverJobMarkup(shipment, { active: true, compact: true }) : emptyState("bi-check2-circle", "No active route.")}
  `;
  document.getElementById("driverJobPreview").innerHTML = assignmentQueue.slice(0, 2).map((job) => queueJobCard(job, { driver: true })).join("");
}

function renderDriverJobs() {
  document.getElementById("driverJobList").innerHTML = assignmentQueue.length
    ? assignmentQueue.map((job) => queueJobCard(job, { driver: true })).join("")
    : emptyState("bi-list-check", "No job offers.");
}

function driverJobMarkup(shipment, options = {}) {
  return `
    <article class="job-card">
      <div class="job-head">
        <div>
          <h3>${escapeHtml(shipment.id)}</h3>
          <p>${escapeHtml(shipment.customer)} . ${escapeHtml(shipment.package)}</p>
        </div>
        <span class="status-pill ${normalizeStatus(shipment.status)}">${escapeHtml(shipment.status)}</span>
      </div>
      ${options.compact ? "" : routePairMarkup(shipment)}
      <div class="job-meta-grid">
        <span><strong>${money(shipment.amount)}</strong>Payout</span>
        <span><strong>${escapeHtml(shipment.distance)}</strong>Trip</span>
        <span><strong>${shipment.eta ? `${shipment.eta}m` : "Done"}</strong>ETA</span>
      </div>
      ${options.active ? `
        <div class="card-actions">
          <button class="btn btn-dark flex-fill" type="button" data-route="driver-route">Navigate</button>
          <button class="btn btn-outline-dark flex-fill" type="button" data-route="driver-proof">POD</button>
        </div>
      ` : ""}
    </article>
  `;
}

function queueJobCard(job, options = {}) {
  return `
    <article class="job-card">
      <div class="job-head">
        <div>
          <h3>${escapeHtml(job.id)}</h3>
          <p>${escapeHtml(job.customer)} . ${escapeHtml(job.package)}</p>
        </div>
        <span class="status-pill ${normalizeStatus(job.priority)}">${escapeHtml(job.priority)}</span>
      </div>
      ${routePairMarkup(job)}
      <div class="job-meta-grid">
        <span><strong>${money(job.amount)}</strong>${options.driver ? "Payout" : "Fee"}</span>
        <span><strong>${job.distance} km</strong>Trip</span>
        <span><strong>${escapeHtml(job.requiredVehicle)}</strong>Vehicle</span>
      </div>
      <div class="card-actions">
        ${
          options.driver
            ? `<button class="btn btn-dark flex-fill" type="button" data-accept-job="${job.id}">Accept</button>
               <button class="btn btn-outline-dark flex-fill" type="button" data-decline-job="${job.id}">Decline</button>`
            : `<button class="btn btn-dark flex-fill" type="button" data-select-queue="${job.id}">Select</button>`
        }
      </div>
    </article>
  `;
}

function renderDriverRoute(shipment) {
  document.getElementById("driverRoutePanel").innerHTML = shipment
    ? `
      ${mapMarkup(shipment)}
      ${driverJobMarkup(shipment)}
      <div class="step-buttons">
        <button class="btn btn-outline-dark" type="button" data-step-status="Picked up">Picked up</button>
        <button class="btn btn-outline-dark" type="button" data-step-status="En route">En route</button>
        <button class="btn btn-dark" type="button" data-route="driver-proof">Proof</button>
        <button class="btn btn-outline-dark" type="button" data-step-status="Delivered">Delivered</button>
      </div>
      ${timelineMarkup(shipment)}
    `
    : emptyState("bi-signpost-split", "No route selected.");
}

function renderDriverWallet(driver) {
  const rows = [
    { label: "Today", value: money(36800) },
    { label: "Pending payout", value: money(14200) },
    { label: "Fuel bonus", value: money(4500) }
  ];
  document.getElementById("driverWalletPanel").innerHTML = `
    <div class="wallet-balance">
      <span>Available balance</span>
      <strong>${money(driver.earnings + 14200)}</strong>
    </div>
    <div class="stack-list spaced">
      ${rows.map((row) => `
        <article class="wallet-card">
          <div class="money-row">
            <div>
              <h3>${row.label}</h3>
              <p>Biglogistics rider wallet</p>
            </div>
            <strong>${row.value}</strong>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function renderAdmin() {
  renderAdminMetrics();
  renderAdminOpsMap();
  renderAdminAssignmentMini();
  renderAdminJobs();
  renderAssignmentPanel();
  renderAdminDrivers();
  renderAdminCustomers();
  renderAdminIssues();
}

function renderAdminMetrics() {
  const revenue = shipments.reduce((sum, shipment) => sum + shipment.amount, 0);
  const active = shipments.filter((shipment) => shipment.status !== "Delivered").length;
  const online = drivers.filter((driver) => driver.status === "online").length;
  document.getElementById("adminMetrics").innerHTML = [
    { label: "Revenue", value: money(revenue), icon: "bi-cash-stack" },
    { label: "Active jobs", value: active, icon: "bi-broadcast" },
    { label: "Queued", value: assignmentQueue.length, icon: "bi-diagram-3" },
    { label: "Drivers", value: `${online}/${drivers.length}`, icon: "bi-people" }
  ]
    .map(metricCard)
    .join("");
}

function metricCard(metric) {
  return `
    <div class="metric-card">
      <i class="bi ${metric.icon}" aria-hidden="true"></i>
      <span>${escapeHtml(metric.label)}</span>
      <strong>${escapeHtml(metric.value)}</strong>
    </div>
  `;
}

function renderAdminOpsMap() {
  document.getElementById("adminOpsMap").innerHTML = mapMarkup(activeShipment(), { compact: true });
}

function renderAdminAssignmentMini() {
  const result = state.assignmentResult;
  document.getElementById("adminAssignmentMini").innerHTML = result
    ? assignmentResultMarkup(result, true)
    : `
      <div class="panel-heading">
        <span>Auto assignment</span>
        <button class="link-button" type="button" data-route="admin-assign">Run</button>
      </div>
      <p class="muted-text">Nearest available driver, vehicle fit, rating, and workload scoring.</p>
    `;
}

function renderAdminJobs() {
  const filters = ["All", "Assigned", "En route", "Delivered", "Delayed"];
  document.getElementById("adminJobFilters").innerHTML = filters
    .map((filter) => `
      <button class="chip ${state.adminFilter === filter ? "active" : ""}" type="button" data-admin-filter="${filter}">
        ${filter}
      </button>
    `)
    .join("");

  const matches = shipments.filter((shipment) => state.adminFilter === "All" || shipment.status === state.adminFilter);
  document.getElementById("adminRecentJobs").innerHTML = shipments.slice(0, 3).map((shipment) => shipmentCard(shipment, { compact: true })).join("");
  document.getElementById("adminJobList").innerHTML = matches.map((shipment) => adminJobCard(shipment)).join("");
}

function adminJobCard(shipment) {
  const driver = driverById(shipment.driverId);
  return `
    <article class="shipment-card">
      <div class="shipment-head">
        <div>
          <h3>${escapeHtml(shipment.id)}</h3>
          <p>${escapeHtml(shipment.customer)} . ${money(shipment.amount)}</p>
        </div>
        <span class="status-pill ${normalizeStatus(shipment.status)}">${escapeHtml(shipment.status)}</span>
      </div>
      ${routePairMarkup(shipment)}
      <div class="job-meta-grid">
        <span><strong>${escapeHtml(driver ? driver.initials : "NA")}</strong>Driver</span>
        <span><strong>${shipment.eta ? `${shipment.eta}m` : "Done"}</strong>ETA</span>
        <span><strong>${escapeHtml(shipment.priority)}</strong>Speed</span>
      </div>
      <div class="card-actions">
        <button class="btn btn-dark flex-fill" type="button" data-track-shipment="${shipment.id}">Track</button>
        <button class="btn btn-outline-dark flex-fill" type="button" data-route="admin-assign">Reassign</button>
      </div>
    </article>
  `;
}

function renderAssignmentPanel() {
  const selected = assignmentQueue.find((job) => job.id === state.selectedQueueId) || assignmentQueue[0];
  if (selected && selected.id !== state.selectedQueueId) {
    state.selectedQueueId = selected.id;
  }

  document.getElementById("assignmentPanel").innerHTML = `
    <div class="admin-panel">
      <div class="panel-heading">
        <span>Queued jobs</span>
        <span class="status-pill neutral">${assignmentQueue.length}</span>
      </div>
      <div class="stack-list">
        ${
          assignmentQueue.length
            ? assignmentQueue.map((job) => queueJobCard(job)).join("")
            : emptyState("bi-check2-circle", "Queue clear.")
        }
      </div>
    </div>

    <div class="admin-panel">
      <div class="panel-heading">
        <span>Best match</span>
        <button class="link-button" type="button" id="runAssignmentInline">Run now</button>
      </div>
      ${
        selected
          ? assignmentPreviewMarkup(selected)
          : `<p class="muted-text">No pending job to assign.</p>`
      }
    </div>

    <div class="admin-panel">
      <div class="panel-heading">
        <span>Driver capacity</span>
        <button class="link-button" type="button" data-route="admin-drivers">Fleet</button>
      </div>
      <div class="stack-list">
        ${drivers.map(driverCapacityMarkup).join("")}
      </div>
    </div>
  `;
}

function assignmentPreviewMarkup(job) {
  const best = bestDriverFor(job);
  const result = scoreDriver(best, job);
  return `
    ${assignmentResultMarkup({ jobId: job.id, driverId: best.id, score: result.score, reasons: result.reasons })}
    <div class="card-actions">
      <button class="btn btn-dark flex-fill" type="button" data-run-assignment-for="${job.id}">Assign ${escapeHtml(best.initials)}</button>
      <button class="btn btn-outline-dark flex-fill" type="button" data-route="admin-live">Board</button>
    </div>
  `;
}

function assignmentResultMarkup(result, compact = false) {
  const job = assignmentQueue.find((item) => item.id === result.jobId) || shipments.find((item) => item.id === result.jobId);
  const driver = driverById(result.driverId);
  const scorePercent = Math.max(0, Math.min(100, Math.round(result.score)));
  return `
    <div class="assignment-score">
      <span class="score-ring" style="--score: ${scorePercent}%">${scorePercent}%</span>
      <div>
        <span class="mini-label">${escapeHtml(job ? job.id : result.jobId)}</span>
        <h3 class="m-0 fs-6 fw-bold">${escapeHtml(driver ? driver.name : "No driver")}</h3>
        <p class="muted-text">${driver ? `${driver.vehicle} . ${driver.area}` : "Awaiting capacity"}</p>
      </div>
    </div>
    ${
      compact
        ? ""
        : `<div class="assignment-reasons">
            ${result.reasons.map((reason) => `<span class="reason-pill">${escapeHtml(reason)}</span>`).join("")}
          </div>`
    }
  `;
}

function bestDriverFor(job) {
  return drivers
    .filter((driver) => driver.status === "online")
    .map((driver) => ({ driver, score: scoreDriver(driver, job).score }))
    .sort((a, b) => b.score - a.score)[0]?.driver || drivers[0];
}

function scoreDriver(driver, job) {
  const vehicleFit = driver.vehicle === job.requiredVehicle ? 22 : driver.vehicle === "Van" ? 10 : 0;
  const workload = Math.max(0, 28 - driver.jobs * 8);
  const distance = Math.max(0, 30 - driver.distance * 4);
  const rating = driver.rating * 4;
  const priority = job.priority === "Priority" && driver.jobs <= 2 ? 8 : 4;
  const score = vehicleFit + workload + distance + rating + priority;
  const reasons = [
    `${driver.distance} km away`,
    `${driver.jobs} open jobs`,
    `${driver.vehicle} fit`,
    `${driver.rating} rating`
  ];
  return { score, reasons };
}

function runAssignment(jobId = state.selectedQueueId) {
  const index = assignmentQueue.findIndex((job) => job.id === jobId);
  if (index < 0) {
    showToast("No queued job selected");
    return;
  }

  const job = assignmentQueue[index];
  const driver = bestDriverFor(job);
  const result = scoreDriver(driver, job);
  assignmentQueue.splice(index, 1);
  driver.jobs += 1;
  driver.capacity = Math.min(96, driver.capacity + 12);

  const shipment = {
    ...job,
    status: "Assigned",
    eta: job.priority === "Priority" ? 19 : 31,
    driverId: driver.id,
    progress: 9,
    distance: `${job.distance} km`,
    created: nowTime()
  };
  shipments.unshift(shipment);
  state.activeShipmentId = shipment.id;
  state.selectedQueueId = assignmentQueue[0]?.id || "";
  state.assignmentResult = {
    jobId: shipment.id,
    driverId: driver.id,
    score: result.score,
    reasons: result.reasons
  };
  syncApp();
  showToast(`${job.id} assigned to ${driver.name}`);
}

function driverCapacityMarkup(driver) {
  return `
    <article class="driver-card">
      <span class="avatar">${escapeHtml(driver.initials)}</span>
      <div>
        <h3>${escapeHtml(driver.name)}</h3>
        <p>${escapeHtml(driver.vehicle)} . ${escapeHtml(driver.area)} . ${driver.jobs} jobs</p>
        <div class="driver-meter"><span style="--fill: ${driver.capacity}%"></span></div>
      </div>
      <span class="status-pill ${driver.status === "online" ? "online" : "offline"}">${escapeHtml(driver.status)}</span>
    </article>
  `;
}

function renderAdminDrivers() {
  document.getElementById("adminDriverList").innerHTML = drivers.map((driver) => `
    <article class="driver-card">
      <span class="avatar">${escapeHtml(driver.initials)}</span>
      <div>
        <h3>${escapeHtml(driver.name)}</h3>
        <p>${escapeHtml(driver.vehicle)} . ${escapeHtml(driver.plate)}</p>
        <div class="driver-meter"><span style="--fill: ${driver.capacity}%"></span></div>
      </div>
      <span class="status-pill ${driver.status === "online" ? "online" : "offline"}">${driver.jobs} jobs</span>
    </article>
  `).join("");
}

function renderAdminCustomers() {
  const totalSpend = customers.reduce((sum, customer) => sum + customer.spend, 0);
  document.getElementById("customerMetrics").innerHTML = [
    { label: "Customers", value: customers.length, icon: "bi-person-heart" },
    { label: "Spend", value: money(totalSpend), icon: "bi-cash" }
  ].map(metricCard).join("");

  document.getElementById("adminCustomerList").innerHTML = customers.map((customer) => `
    <article class="shipment-card">
      <div class="shipment-head">
        <div>
          <h3>${escapeHtml(customer.name)}</h3>
          <p>${escapeHtml(customer.location)} . ${customer.shipments} shipments</p>
        </div>
        <span class="status-pill paid">${escapeHtml(customer.tag)}</span>
      </div>
      <div class="job-meta-grid">
        <span><strong>${money(customer.spend)}</strong>Spend</span>
        <span><strong>${customer.shipments}</strong>Jobs</span>
        <span><strong>${escapeHtml(customer.location)}</strong>Zone</span>
      </div>
    </article>
  `).join("");
}

function openIssues() {
  return issues.filter((issue) => issue.open);
}

function renderAdminIssues() {
  const open = openIssues();
  const badge = document.getElementById("issueBadge");
  if (badge) {
    badge.textContent = open.length;
  }

  document.getElementById("adminIssueList").innerHTML = issues.length
    ? issues.map((issue) => `
      <article class="shipment-card">
        <div class="shipment-head">
          <div>
            <h3>${escapeHtml(issue.title)}</h3>
            <p>${escapeHtml(issue.detail)}</p>
          </div>
          <span class="status-pill ${normalizeStatus(issue.level)}">${escapeHtml(issue.level)}</span>
        </div>
        <div class="card-actions">
          <button class="btn btn-dark flex-fill" type="button" data-resolve-issue="${issue.id}" ${issue.open ? "" : "disabled"}>
            ${issue.open ? "Resolve" : "Resolved"}
          </button>
          <button class="btn btn-outline-dark flex-fill" type="button" data-route="admin-live">View job</button>
        </div>
      </article>
    `).join("")
    : emptyState("bi-check2-circle", "No issues.");
}

function emptyState(icon, text) {
  return `
    <div class="empty-state">
      <div>
        <i class="bi ${icon}" aria-hidden="true"></i>
        <p>${escapeHtml(text)}</p>
      </div>
    </div>
  `;
}

function acceptJob(jobId) {
  const index = assignmentQueue.findIndex((job) => job.id === jobId);
  if (index < 0) return;
  const job = assignmentQueue[index];
  const driver = activeDriver();
  assignmentQueue.splice(index, 1);
  driver.jobs += 1;

  const shipment = {
    ...job,
    status: "Assigned",
    eta: job.priority === "Priority" ? 20 : 32,
    driverId: driver.id,
    progress: 8,
    distance: `${job.distance} km`,
    created: nowTime()
  };
  shipments.unshift(shipment);
  state.activeShipmentId = shipment.id;
  routeTo("driver-route");
  showToast(`${job.id} accepted`);
}

function declineJob(jobId) {
  const index = assignmentQueue.findIndex((job) => job.id === jobId);
  if (index < 0) return;
  const job = assignmentQueue.splice(index, 1)[0];
  assignmentQueue.push(job);
  syncApp();
  showToast(`${jobId} moved to queue`);
}

function updateShipmentStatus(status) {
  const shipment = driverActiveShipment();
  if (!shipment) return;
  shipment.status = status;
  if (status === "Picked up") shipment.progress = Math.max(shipment.progress, 35);
  if (status === "En route") shipment.progress = Math.max(shipment.progress, 56);
  if (status === "Delivered") {
    shipment.progress = 100;
    shipment.eta = 0;
    state.proofCompleted = true;
  }
  state.activeShipmentId = shipment.id;
  syncApp();
  showToast(`${shipment.id} ${status.toLowerCase()}`);
}

function sendSupportMessage(text) {
  const trimmed = text.trim();
  if (!trimmed) return;
  supportMessages.push({ from: "me", text: trimmed, time: nowTime() });
  supportMessages.push({
    from: "agent",
    text: "Dispatch has it. We will update the rider and keep this thread live.",
    time: nowTime()
  });
  renderCustomerSupport();
}

function tickLiveTracking() {
  let changed = false;
  shipments.forEach((shipment) => {
    if (shipment.status === "En route" && shipment.progress < 94) {
      shipment.progress += 1;
      if (shipment.eta > 3 && shipment.progress % 4 === 0) {
        shipment.eta -= 1;
      }
      changed = true;
    }
  });

  if (!changed || !state.authenticated) return;

  if (state.role === "customer" && ["customer-home", "customer-tracking", "customer-orders"].includes(state.view)) {
    renderCustomer();
  }

  if (state.role === "driver" && ["driver-home", "driver-route"].includes(state.view)) {
    renderDriver();
  }

  if (state.role === "admin" && ["admin-dashboard", "admin-live"].includes(state.view)) {
    renderAdmin();
  }
}

document.addEventListener("click", (event) => {
  const themeButton = event.target.closest("#themeToggle");
  if (themeButton) {
    setTheme(state.theme === "dark" ? "light" : "dark");
    return;
  }

  const homeButton = event.target.closest("[data-home]");
  if (homeButton) {
    if (!state.authenticated) return;
    routeTo(defaultViewForRole(state.role));
    return;
  }

  const loginRole = event.target.closest("[data-login-role]");
  if (loginRole) {
    state.loginRole = loginRole.dataset.loginRole;
    renderAuthRoles();
    return;
  }

  const roleButton = event.target.closest("[data-role]");
  if (roleButton) {
    setRole(roleButton.dataset.role);
    return;
  }

  const routeButton = event.target.closest("[data-route]");
  if (routeButton) {
    routeTo(routeButton.dataset.route);
    return;
  }

  const trackingButton = event.target.closest("[data-track-shipment]");
  if (trackingButton) {
    state.activeShipmentId = trackingButton.dataset.trackShipment;
    routeTo(state.role === "driver" ? "driver-route" : state.role === "admin" ? "admin-live" : "customer-tracking");
    return;
  }

  const filterButton = event.target.closest("[data-customer-filter]");
  if (filterButton) {
    state.customerFilter = filterButton.dataset.customerFilter;
    renderCustomerOrders();
    return;
  }

  const adminFilterButton = event.target.closest("[data-admin-filter]");
  if (adminFilterButton) {
    state.adminFilter = adminFilterButton.dataset.adminFilter;
    renderAdminJobs();
    return;
  }

  const chatQuick = event.target.closest("[data-chat-quick]");
  if (chatQuick) {
    sendSupportMessage(chatQuick.dataset.chatQuick);
    return;
  }

  const acceptButton = event.target.closest("[data-accept-job]");
  if (acceptButton) {
    acceptJob(acceptButton.dataset.acceptJob);
    return;
  }

  const declineButton = event.target.closest("[data-decline-job]");
  if (declineButton) {
    declineJob(declineButton.dataset.declineJob);
    return;
  }

  const stepButton = event.target.closest("[data-step-status]");
  if (stepButton) {
    updateShipmentStatus(stepButton.dataset.stepStatus);
    return;
  }

  const queueButton = event.target.closest("[data-select-queue]");
  if (queueButton) {
    state.selectedQueueId = queueButton.dataset.selectQueue;
    renderAssignmentPanel();
    showToast(`${state.selectedQueueId} selected`);
    return;
  }

  const assignButton = event.target.closest("[data-run-assignment-for]");
  if (assignButton) {
    runAssignment(assignButton.dataset.runAssignmentFor);
    return;
  }

  const runAssignmentButton = event.target.closest("#runAssignment, #runAssignmentInline");
  if (runAssignmentButton) {
    runAssignment();
    return;
  }

  const resolveButton = event.target.closest("[data-resolve-issue]");
  if (resolveButton) {
    const issue = issues.find((item) => item.id === resolveButton.dataset.resolveIssue);
    if (issue) {
      issue.open = false;
      syncApp();
      showToast(`${issue.id} resolved`);
    }
    return;
  }

  const resolveAll = event.target.closest("[data-resolve-all]");
  if (resolveAll) {
    issues.forEach((issue) => {
      issue.open = false;
    });
    syncApp();
    showToast("Alerts resolved");
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.id === "authForm") {
    event.preventDefault();
    login(state.loginRole);
    return;
  }

  if (event.target.id === "bookingForm") {
    event.preventDefault();
    createBooking();
    return;
  }

  if (event.target.id === "supportForm") {
    event.preventDefault();
    const input = document.getElementById("supportInput");
    sendSupportMessage(input.value);
    return;
  }

  if (event.target.id === "proofForm") {
    event.preventDefault();
    updateShipmentStatus("Delivered");
    routeTo("driver-home");
  }
});

document.addEventListener("input", (event) => {
  if (["packageType", "deliverySpeed", "pickupAddress", "dropoffAddress"].includes(event.target.id)) {
    renderCustomerBook();
  }
});

document.addEventListener("change", (event) => {
  if (["packageType", "deliverySpeed"].includes(event.target.id)) {
    renderCustomerBook();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  setTheme(state.theme);
  syncApp();
  window.setInterval(tickLiveTracking, 2600);
});
