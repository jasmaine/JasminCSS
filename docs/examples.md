# Examples

Real-world examples and patterns using JasminCSS.

## Page Layouts

### Dashboard Layout

```html
<div class="flex min-h-screen">
  <!-- Sidebar -->
  <aside class="w-64 bg-gray-900 text-white flex flex-col">
    <div class="p-4 border-b border-gray-800">
      <h1 class="text-xl font-bold">Dashboard</h1>
    </div>
    <nav class="flex-1 p-4">
      <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg bg-gray-800">
        <span class="icon icon-home"></span> Home
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800">
        <span class="icon icon-users"></span> Users
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800">
        <span class="icon icon-chart"></span> Analytics
      </a>
      <a href="#" class="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-800">
        <span class="icon icon-settings"></span> Settings
      </a>
    </nav>
  </aside>

  <!-- Main content -->
  <main class="flex-1 bg-gray-100">
    <!-- Header -->
    <header class="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h2 class="text-lg font-semibold">Overview</h2>
      <div class="flex items-center gap-4">
        <button class="btn btn-ghost"><span class="icon icon-bell"></span></button>
        <div class="avatar avatar-sm">
          <img src="user.jpg" alt="User">
        </div>
      </div>
    </header>

    <!-- Content -->
    <div class="p-6">
      <!-- Stats Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div class="card">
          <div class="card-body">
            <p class="text-sm text-gray-500">Total Users</p>
            <p class="text-2xl font-bold">12,345</p>
            <p class="text-sm text-success">+12% from last month</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <p class="text-sm text-gray-500">Revenue</p>
            <p class="text-2xl font-bold">$45,678</p>
            <p class="text-sm text-success">+8% from last month</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <p class="text-sm text-gray-500">Orders</p>
            <p class="text-2xl font-bold">1,234</p>
            <p class="text-sm text-error">-3% from last month</p>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <p class="text-sm text-gray-500">Conversion</p>
            <p class="text-2xl font-bold">3.45%</p>
            <p class="text-sm text-success">+0.5% from last month</p>
          </div>
        </div>
      </div>

      <!-- Table -->
      <div class="card">
        <div class="card-header flex justify-between items-center">
          <h3 class="font-semibold">Recent Orders</h3>
          <button class="btn btn-sm btn-primary">View All</button>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#12345</td>
              <td>John Doe</td>
              <td>$123.00</td>
              <td><span class="badge badge-success">Completed</span></td>
            </tr>
            <tr>
              <td>#12346</td>
              <td>Jane Smith</td>
              <td>$456.00</td>
              <td><span class="badge badge-warning">Pending</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</div>
```

### Landing Page Hero

```html
<section class="min-h-screen flex items-center bg-gradient-to-br from-primary to-secondary">
  <div class="container mx-auto px-6 py-20">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="text-white">
        <h1 class="text-4xl lg:text-6xl font-bold mb-6">
          Build beautiful interfaces faster
        </h1>
        <p class="text-lg opacity-90 mb-8">
          JasminCSS is a modern CSS framework with utilities, components,
          and everything you need to create stunning web applications.
        </p>
        <div class="flex gap-4">
          <a href="#" class="btn btn-lg bg-white text-primary hover:bg-gray-100">
            Get Started
          </a>
          <a href="#" class="btn btn-lg btn-outline-white">
            Documentation
          </a>
        </div>
      </div>
      <div class="hidden lg:block">
        <div class="card card-glass p-8">
          <pre class="text-white text-sm"><code>&lt;button class="btn btn-primary"&gt;
  Click me
&lt;/button&gt;</code></pre>
        </div>
      </div>
    </div>
  </div>
</section>
```

## Component Patterns

### Login Form

```html
<div class="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
  <div class="card w-full max-w-md">
    <div class="card-body p-8">
      <div class="text-center mb-8">
        <h1 class="text-2xl font-bold">Welcome back</h1>
        <p class="text-gray-500">Sign in to your account</p>
      </div>

      <form>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" placeholder="you@example.com">
        </div>

        <div class="form-group">
          <div class="flex justify-between">
            <label class="form-label">Password</label>
            <a href="#" class="text-sm text-primary">Forgot password?</a>
          </div>
          <input type="password" class="form-control" placeholder="Enter your password">
        </div>

        <div class="form-group">
          <label class="flex items-center gap-2">
            <input type="checkbox" class="form-checkbox">
            <span>Remember me</span>
          </label>
        </div>

        <button type="submit" class="btn btn-primary w-full">Sign in</button>
      </form>

      <div class="mt-6 text-center">
        <p class="text-gray-500">
          Don't have an account?
          <a href="#" class="text-primary">Sign up</a>
        </p>
      </div>

      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-200"></div>
        </div>
        <div class="relative flex justify-center">
          <span class="bg-white px-4 text-sm text-gray-500">Or continue with</span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <button class="btn btn-outline flex items-center justify-center gap-2">
          <span class="icon icon-google"></span> Google
        </button>
        <button class="btn btn-outline flex items-center justify-center gap-2">
          <span class="icon icon-github"></span> GitHub
        </button>
      </div>
    </div>
  </div>
</div>
```

### Pricing Cards

```html
<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-6">
    <div class="text-center mb-12">
      <h2 class="text-3xl font-bold mb-4">Simple, transparent pricing</h2>
      <p class="text-gray-500">Choose the plan that works for you</p>
    </div>

    <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <!-- Free -->
      <div class="card">
        <div class="card-body p-8">
          <h3 class="text-lg font-semibold mb-2">Free</h3>
          <p class="text-gray-500 mb-6">For personal projects</p>
          <div class="mb-6">
            <span class="text-4xl font-bold">$0</span>
            <span class="text-gray-500">/month</span>
          </div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-2">
              <span class="icon icon-check text-success"></span> 5 projects
            </li>
            <li class="flex items-center gap-2">
              <span class="icon icon-check text-success"></span> Basic support
            </li>
            <li class="flex items-center gap-2 text-gray-400">
              <span class="icon icon-x"></span> Custom domains
            </li>
          </ul>
          <button class="btn btn-outline w-full">Get started</button>
        </div>
      </div>

      <!-- Pro (Featured) -->
      <div class="card border-primary shadow-lg relative">
        <div class="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-lg rounded-tr">
          Popular
        </div>
        <div class="card-body p-8">
          <h3 class="text-lg font-semibold mb-2">Pro</h3>
          <p class="text-gray-500 mb-6">For growing teams</p>
          <div class="mb-6">
            <span class="text-4xl font-bold">$29</span>
            <span class="text-gray-500">/month</span>
          </div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-2">
              <span class="icon icon-check text-success"></span> Unlimited projects
            </li>
            <li class="flex items-center gap-2">
              <span class="icon icon-check text-success"></span> Priority support
            </li>
            <li class="flex items-center gap-2">
              <span class="icon icon-check text-success"></span> Custom domains
            </li>
          </ul>
          <button class="btn btn-primary w-full">Get started</button>
        </div>
      </div>

      <!-- Enterprise -->
      <div class="card">
        <div class="card-body p-8">
          <h3 class="text-lg font-semibold mb-2">Enterprise</h3>
          <p class="text-gray-500 mb-6">For large organizations</p>
          <div class="mb-6">
            <span class="text-4xl font-bold">$99</span>
            <span class="text-gray-500">/month</span>
          </div>
          <ul class="space-y-3 mb-8">
            <li class="flex items-center gap-2">
              <span class="icon icon-check text-success"></span> Everything in Pro
            </li>
            <li class="flex items-center gap-2">
              <span class="icon icon-check text-success"></span> SSO & SAML
            </li>
            <li class="flex items-center gap-2">
              <span class="icon icon-check text-success"></span> Dedicated support
            </li>
          </ul>
          <button class="btn btn-outline w-full">Contact sales</button>
        </div>
      </div>
    </div>
  </div>
</section>
```

### User Profile Card

```html
<div class="card max-w-sm">
  <div class="relative">
    <div class="h-32 bg-gradient-to-r from-primary to-secondary rounded-t-lg"></div>
    <div class="absolute -bottom-12 left-6">
      <div class="avatar avatar-xl border-4 border-white">
        <img src="user.jpg" alt="Jane Doe">
      </div>
    </div>
  </div>
  <div class="card-body pt-16">
    <div class="flex justify-between items-start">
      <div>
        <h3 class="text-xl font-bold">Jane Doe</h3>
        <p class="text-gray-500">Product Designer</p>
      </div>
      <button class="btn btn-sm btn-primary">Follow</button>
    </div>
    <p class="mt-4 text-gray-600">
      Creating beautiful interfaces and experiences. Design systems enthusiast.
    </p>
    <div class="flex gap-6 mt-4 pt-4 border-t">
      <div class="text-center">
        <p class="font-bold">1.2k</p>
        <p class="text-sm text-gray-500">Followers</p>
      </div>
      <div class="text-center">
        <p class="font-bold">348</p>
        <p class="text-sm text-gray-500">Following</p>
      </div>
      <div class="text-center">
        <p class="font-bold">56</p>
        <p class="text-sm text-gray-500">Projects</p>
      </div>
    </div>
  </div>
</div>
```

### Navigation Bar

```html
<nav class="navbar bg-white shadow-sm sticky top-0 z-50">
  <div class="container mx-auto px-6 flex justify-between items-center h-16">
    <!-- Logo -->
    <a href="#" class="text-xl font-bold text-primary">Brand</a>

    <!-- Desktop Nav -->
    <div class="hidden md:flex items-center gap-8">
      <a href="#" class="text-gray-700 hover:text-primary">Products</a>
      <a href="#" class="text-gray-700 hover:text-primary">Solutions</a>
      <a href="#" class="text-gray-700 hover:text-primary">Pricing</a>
      <a href="#" class="text-gray-700 hover:text-primary">Docs</a>
    </div>

    <!-- Actions -->
    <div class="hidden md:flex items-center gap-4">
      <button class="btn btn-ghost">Sign in</button>
      <button class="btn btn-primary">Get Started</button>
    </div>

    <!-- Mobile Menu Button -->
    <button class="md:hidden btn btn-ghost" data-offcanvas-target="#mobile-menu">
      <span class="icon icon-menu"></span>
    </button>
  </div>
</nav>

<!-- Mobile Menu -->
<div class="offcanvas offcanvas-end" data-offcanvas id="mobile-menu">
  <div class="offcanvas-header">
    <h5 class="text-lg font-bold">Menu</h5>
    <button class="offcanvas-close" data-offcanvas-close>&times;</button>
  </div>
  <div class="offcanvas-body">
    <nav class="flex flex-col gap-4">
      <a href="#" class="py-2 text-lg">Products</a>
      <a href="#" class="py-2 text-lg">Solutions</a>
      <a href="#" class="py-2 text-lg">Pricing</a>
      <a href="#" class="py-2 text-lg">Docs</a>
    </nav>
    <div class="mt-8 flex flex-col gap-4">
      <button class="btn btn-outline w-full">Sign in</button>
      <button class="btn btn-primary w-full">Get Started</button>
    </div>
  </div>
</div>
```

### Data Table with Actions

```html
<div class="card">
  <div class="card-header flex justify-between items-center">
    <h3 class="font-semibold">Users</h3>
    <div class="flex gap-2">
      <input type="search" class="form-control form-control-sm" placeholder="Search...">
      <button class="btn btn-sm btn-primary">
        <span class="icon icon-plus"></span> Add User
      </button>
    </div>
  </div>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>
          <input type="checkbox" class="form-checkbox">
        </th>
        <th>User</th>
        <th>Email</th>
        <th>Role</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><input type="checkbox" class="form-checkbox"></td>
        <td>
          <div class="flex items-center gap-3">
            <div class="avatar avatar-sm">
              <img src="user1.jpg" alt="John">
            </div>
            <span>John Doe</span>
          </div>
        </td>
        <td>john@example.com</td>
        <td><span class="badge">Admin</span></td>
        <td><span class="badge badge-success">Active</span></td>
        <td>
          <div class="dropdown" data-dropdown>
            <button class="btn btn-sm btn-ghost dropdown-toggle">
              <span class="icon icon-more-vertical"></span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Edit</a>
              <a class="dropdown-item" href="#">View</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item text-error" href="#">Delete</a>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <div class="card-footer flex justify-between items-center">
    <span class="text-sm text-gray-500">Showing 1-10 of 100</span>
    <div class="flex gap-1">
      <button class="btn btn-sm btn-ghost" disabled>&laquo;</button>
      <button class="btn btn-sm btn-primary">1</button>
      <button class="btn btn-sm btn-ghost">2</button>
      <button class="btn btn-sm btn-ghost">3</button>
      <button class="btn btn-sm btn-ghost">&raquo;</button>
    </div>
  </div>
</div>
```

### Settings Form

```html
<div class="card max-w-2xl">
  <div class="card-header">
    <h3 class="font-semibold">Account Settings</h3>
  </div>
  <div class="card-body">
    <form>
      <!-- Profile Section -->
      <div class="mb-8">
        <h4 class="text-sm font-semibold text-gray-500 uppercase mb-4">Profile</h4>
        <div class="flex items-center gap-6 mb-6">
          <div class="avatar avatar-xl">
            <img src="user.jpg" alt="Profile">
          </div>
          <div>
            <button type="button" class="btn btn-sm btn-outline">Change photo</button>
            <p class="text-sm text-gray-500 mt-2">JPG, PNG or GIF. Max 2MB.</p>
          </div>
        </div>
        <div class="grid md:grid-cols-2 gap-4">
          <div class="form-group">
            <label class="form-label">First name</label>
            <input type="text" class="form-control" value="Jane">
          </div>
          <div class="form-group">
            <label class="form-label">Last name</label>
            <input type="text" class="form-control" value="Doe">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input type="email" class="form-control" value="jane@example.com">
        </div>
        <div class="form-group">
          <label class="form-label">Bio</label>
          <textarea class="form-control" rows="3">Product designer and developer.</textarea>
        </div>
      </div>

      <!-- Notifications Section -->
      <div class="mb-8">
        <h4 class="text-sm font-semibold text-gray-500 uppercase mb-4">Notifications</h4>
        <div class="space-y-4">
          <label class="flex items-center justify-between">
            <div>
              <p class="font-medium">Email notifications</p>
              <p class="text-sm text-gray-500">Receive emails about account activity</p>
            </div>
            <input type="checkbox" class="form-switch" checked>
          </label>
          <label class="flex items-center justify-between">
            <div>
              <p class="font-medium">Marketing emails</p>
              <p class="text-sm text-gray-500">Receive tips, trends, and offers</p>
            </div>
            <input type="checkbox" class="form-switch">
          </label>
          <label class="flex items-center justify-between">
            <div>
              <p class="font-medium">Push notifications</p>
              <p class="text-sm text-gray-500">Receive push notifications on desktop</p>
            </div>
            <input type="checkbox" class="form-switch" checked>
          </label>
        </div>
      </div>

      <!-- Danger Zone -->
      <div class="p-4 border border-error rounded-lg bg-error/5">
        <h4 class="text-sm font-semibold text-error uppercase mb-2">Danger Zone</h4>
        <p class="text-sm text-gray-600 mb-4">
          Once you delete your account, there is no going back.
        </p>
        <button type="button" class="btn btn-error btn-outline">Delete Account</button>
      </div>
    </form>
  </div>
  <div class="card-footer flex justify-end gap-4">
    <button type="button" class="btn btn-ghost">Cancel</button>
    <button type="submit" class="btn btn-primary">Save Changes</button>
  </div>
</div>
```

## Dark Mode Example

```html
<!DOCTYPE html>
<html class="dark">
<head>
  <link rel="stylesheet" href="jasmincss/dist/jasmin.css">
</head>
<body class="bg-gray-900 text-gray-100 min-h-screen">
  <div class="container mx-auto p-8">
    <div class="card bg-gray-800 border-gray-700">
      <div class="card-body">
        <h2 class="text-xl font-bold mb-4">Dark Mode Card</h2>
        <p class="text-gray-400 mb-4">
          This card automatically adapts to dark mode styling.
        </p>
        <button class="btn btn-primary">Action</button>
      </div>
    </div>
  </div>
</body>
</html>
```

### Dark Mode Toggle

```html
<button id="theme-toggle" class="btn btn-ghost">
  <span class="icon icon-sun dark:hidden"></span>
  <span class="icon icon-moon hidden dark:block"></span>
</button>

<script>
  const toggle = document.getElementById('theme-toggle');
  toggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  });

  // On page load
  if (localStorage.theme === 'dark' || (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  }
</script>
```
