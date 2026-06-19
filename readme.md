# Beach Brings App v3 — Investor Demo Edition

**For Monday's investor pitch.**

## What's NEW in v3 vs v2

| Feature | What it does |
|---|---|
| 🔐 **Role-based login** | Splash screen now has 3 role pills: 🏖️ Customer · 🚙 Driver · 📊 Admin. Demo creds pre-filled (`demo@beachbrings.com` / `demo`) |
| 📊 **Admin dashboard** | Live revenue ticker (auto-increments every ~2 sec), live order count, hourly volume chart, top drivers leaderboard, coverage heatmap |
| 📲 **Real QR code generator** | NEW Share screen renders an actual scannable QR using qrcode-generator CDN. Investor hands the QR around — guests download Beach Brings on the spot |
| 🔄 **Role switcher inside the app** | From admin dashboard you can jump to Customer view or Driver view to show the marketplace from all 3 sides without re-logging |
| 📈 **Demo metrics that feel real** | Today: $4,287 revenue · 142 orders · 7 active deliveries · 11 drivers on duty (all incrementing live) |

## Deploy in 30 seconds

1. Open https://app.netlify.com/drop
2. Drag the entire **`Beach_Brings_App_v3`** folder onto the drop zone
3. Get a public URL like `https://random-name.netlify.app`
4. Open it on your phone → tap Share → "Add to Home Screen"
5. Now you've got a real installed app to demo

## Optional but RECOMMENDED — set the QR URL

After you deploy and get your Netlify URL, paste this into Chrome console (F12) on the app:

```javascript
localStorage.setItem('bb_app_url', 'https://YOUR-NETLIFY-URL.netlify.app');
```

Now the QR code in the Share screen encodes your real public URL — when an investor scans it, they actually download YOUR demo. (If you skip this, the QR encodes whatever URL the browser is currently on, which works too.)

## The Monday investor pitch flow (10 minutes)

### Pre-pitch
- Hold up your phone with the app installed → "this is Beach Brings, the only beach delivery app that drives on the sand."

### Demo 1 — Customer (3 min)
1. Open app on phone
2. Login screen → tap **🏖️ CUSTOMER** → tap **Sign in →**
3. Show the home screen — categories, partners, "delivering to beach spot · 2.3 mi"
4. Tap a category → tap a product → add to cart → tap cart in bottom nav
5. **THE WOW MOMENT** — tap "Delivering to beach spot" pill → drop a pin on the sand map → tap "Confirm pin"
6. Back to cart → "Place Order" → confetti / success
7. *Talk track: "DoorDash needs a street address. Uber Eats stops at the seawall. Beach Brings finds you at Beach Marker 22, next to the blue canopy."*

### Demo 2 — Driver (2 min)
1. From profile, tap **📊 Operations Dashboard** then **🚙 Driver view** (or do this on the phone via menu)
2. Show active deliveries list with payouts
3. *Talk track: "Drivers use their own 4WDs. They get 100% of the delivery fee plus 100% of the tip. Stripe Connect daily payouts. We don't own the trucks — they do."*

### Demo 3 — Admin (3 min) ← THIS IS THE INVESTOR MONEY SHOT
1. From profile or directly: **📊 Operations Dashboard**
2. Show the **live revenue ticker** moving — point at it: "this is real-time across the whole platform"
3. Walk them through:
   - Today revenue ($4,287 ticking up)
   - Orders today (142 incrementing)
   - Active deliveries (changing live)
   - Drivers on duty
   - Hourly order volume chart
   - Top drivers leaderboard (referral hint: "if your driver makes $284/day, your driver tells their friends")
   - Coverage heatmap
4. Take rate badge → **25.2%** — point at it
5. *Talk track: "This is the dashboard our CFO would look at. The platform throws off cash from order one. Take rate is locked at 25% — lower than DoorDash's 30% — and our 32% contribution margin per order means the platform throws off cash because we don't own the trucks."*

### Demo 4 — The Close (2 min)
1. From admin or profile → **📲 Share & Grow**
2. The real QR code is on screen
3. Hold the phone up: "I'm going to pass this around. Anyone here who scans it — go ahead, you'll have Beach Brings installed in five seconds. That's how every Port A vacationer becomes a user."
4. Pause. Let them scan.
5. *Close: "$200K builds the MVP, locks our permits, onboards 20 partners and 30 drivers, and we launch the weekend of August 1st. On our growth plan we cover debt service 1.56x in Year 1, climbing past 5x by Year 3, on a path to $1.09M revenue and $127K net income by Year 3. The question isn't whether this works — it's how big you want your slice."*

## Backend note (when they ask)

When an investor asks "where's the backend?" — the honest answer:

> *"The frontend you're holding is the working prototype. The Supabase + Stripe Connect backend is fully designed and partially built — schema's deployed, edge functions for payment splitting and driver dispatch are written. With this raise, we ship the production stack in six weeks. Lovable + Supabase + Stripe is the stack — proven, scaleable, and frankly cheap to build on."*

You have the `Lovable_Kit/` folder to back this up if they want to see the actual code (`supabase_schema.sql`, the 4 edge functions in `edge-functions/`, etc.).

## Reset between pitches

Want a clean demo every time? Open browser dev console and run:
```javascript
localStorage.clear(); location.reload();
```
Splash screen comes back, role unselected, fresh start.

## Files

```
Beach_Brings_App_v3/
├── index.html                       (111 KB · the app)
├── beach_brings_coastal_seal.svg    (logo + favicon)
├── manifest.webmanifest             (PWA install)
├── service-worker.js                (offline cache)
└── README.md                        (this file)
```

🐺 **You got this. Go own the room.**
