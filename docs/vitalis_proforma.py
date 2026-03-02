"""
Vitalis Longevity Clinic - Proforma Financial Model
Flagship (Dallas) + Franchise Expansion
Based on research data from market analysis
"""

import json

# ============================================================
# ASSUMPTIONS - FLAGSHIP LOCATION (Dallas Park Cities / Preston Hollow)
# ============================================================

# Real Estate
sqft = 2500
lease_rate_nnn = 38  # $/sqft/yr - Park Cities premium retail corridor
annual_rent = sqft * lease_rate_nnn
monthly_rent = annual_rent / 12

# Build-out & Capital
buildout_cost_psf = 120  # $/sqft - medical spa finish, high-end
buildout_total = sqft * buildout_cost_psf

# Equipment
equipment = {
    "IV Chairs (12)": 12 * 2500,
    "DEXA Body Scanner": 65000,
    "InBody Composition Scanner": 15000,
    "Cold Plunge (2)": 2 * 12000,
    "Red Light Therapy Beds (2)": 2 * 18000,
    "Lab Equipment / Centrifuge": 25000,
    "Infusion Pumps (12)": 12 * 1700,
    "Cryotherapy Chamber": 45000,
    "EMR / Tech Infrastructure": 35000,
    "Furniture & Fixtures": 40000,
}
total_equipment = sum(equipment.values())

# Working Capital & Pre-Opening
working_capital = 120000
pre_opening_marketing = 75000
legal_licensing = 35000
total_startup = buildout_total + total_equipment + working_capital + pre_opening_marketing + legal_licensing

# ============================================================
# MEMBERSHIP MODEL
# ============================================================

# Three tiers - high-end discretionary pricing
tiers = {
    "Essential": {"monthly": 499, "annual": 5388, "services": "Monthly labs, 2 IV infusions/mo, Vitalis Score tracking"},
    "Optimize": {"monthly": 999, "annual": 10788, "services": "Bi-weekly labs, 4 IV infusions/mo, hormone panel, peptide protocols, body comp"},
    "Elite": {"monthly": 1999, "annual": 21588, "services": "Weekly access, unlimited IV, full longevity panel, Dr. Truei consults, concierge scheduling"},
}

# Member mix assumption (mature location, month 18+)
member_mix = {
    "Essential": {"count": 80, "monthly": 499},
    "Optimize": {"count": 60, "monthly": 999},
    "Elite": {"count": 30, "monthly": 1999},
}

# Additional a la carte / non-member revenue
ala_carte_monthly = 18000  # walk-in IV, surgical recovery packages, executive physicals

# ============================================================
# REVENUE RAMP (Monthly member counts by quarter)
# ============================================================

ramp = {
    "M1":  {"Essential": 10, "Optimize": 5,  "Elite": 2},
    "M2":  {"Essential": 15, "Optimize": 8,  "Elite": 3},
    "M3":  {"Essential": 22, "Optimize": 12, "Elite": 5},
    "M4":  {"Essential": 30, "Optimize": 16, "Elite": 7},
    "M5":  {"Essential": 38, "Optimize": 20, "Elite": 9},
    "M6":  {"Essential": 45, "Optimize": 24, "Elite": 11},
    "M7":  {"Essential": 52, "Optimize": 28, "Elite": 14},
    "M8":  {"Essential": 58, "Optimize": 32, "Elite": 17},
    "M9":  {"Essential": 63, "Optimize": 36, "Elite": 20},
    "M10": {"Essential": 67, "Optimize": 40, "Elite": 23},
    "M11": {"Essential": 72, "Optimize": 44, "Elite": 26},
    "M12": {"Essential": 75, "Optimize": 48, "Elite": 28},
    # Year 2 - mature
    "M13": {"Essential": 78, "Optimize": 52, "Elite": 29},
    "M14": {"Essential": 79, "Optimize": 55, "Elite": 30},
    "M15": {"Essential": 80, "Optimize": 57, "Elite": 30},
    "M16": {"Essential": 80, "Optimize": 58, "Elite": 30},
    "M17": {"Essential": 80, "Optimize": 59, "Elite": 30},
    "M18": {"Essential": 80, "Optimize": 60, "Elite": 30},
}

prices = {"Essential": 499, "Optimize": 999, "Elite": 1999}

monthly_revenue = {}
monthly_ala_carte = {}
for m, counts in ramp.items():
    month_num = int(m[1:])
    rev = sum(counts[t] * prices[t] for t in counts)
    # A la carte ramps with membership
    ac = ala_carte_monthly * (month_num / 18) if month_num <= 18 else ala_carte_monthly
    monthly_revenue[m] = rev
    monthly_ala_carte[m] = round(ac)

# ============================================================
# OPERATING EXPENSES (Monthly)
# ============================================================

# Staffing
staff = {
    "Medical Director (Dr. Truei, part-time)": 12500,   # $150K/yr part-time
    "RN / Infusion Nurse (2 FT)": 2 * 7500,             # $90K/yr each
    "LVN / Clinical Assistant (1)": 4500,                # $54K/yr
    "Client Experience Manager": 5500,                   # $66K/yr
    "Front Desk / Concierge (2 PT)": 2 * 2500,          # $30K/yr each
    "Payroll Taxes & Benefits (22%)": 0,                 # calculated below
}
base_payroll = sum(v for k, v in staff.items() if "Payroll" not in k)
staff["Payroll Taxes & Benefits (22%)"] = round(base_payroll * 0.22)
total_monthly_payroll = base_payroll + staff["Payroll Taxes & Benefits (22%)"]

# Fixed Operating
fixed_opex = {
    "Rent (NNN)": monthly_rent,
    "Utilities": 3500,
    "Insurance (Medical Malpractice + General)": 3200,
    "EMR / Software Subscriptions": 2500,
    "Marketing & Advertising": 8000,
    "Lab / Supplies COGS (~15% of revenue)": 0,  # variable, calculated separately
    "Accounting / Legal": 2000,
    "Miscellaneous / Contingency": 2500,
}
total_fixed_opex = sum(v for k, v in fixed_opex.items() if "COGS" not in k)

# Variable COGS = 15% of membership revenue + 25% of a la carte
def monthly_cogs(mem_rev, ac_rev):
    return mem_rev * 0.15 + ac_rev * 0.25

# ============================================================
# MONTHLY P&L - YEAR 1 & YEAR 2
# ============================================================

monthly_pl = []
for m, counts in ramp.items():
    month_num = int(m[1:])
    mem_rev = monthly_revenue[m]
    ac_rev = monthly_ala_carte[m]
    total_rev = mem_rev + ac_rev
    cogs = monthly_cogs(mem_rev, ac_rev)
    gross_profit = total_rev - cogs
    total_opex = total_monthly_payroll + total_fixed_opex
    ebitda = gross_profit - total_opex
    total_members = sum(counts.values())
    monthly_pl.append({
        "month": m,
        "month_num": month_num,
        "members": total_members,
        "membership_revenue": round(mem_rev),
        "ala_carte_revenue": round(ac_rev),
        "total_revenue": round(total_rev),
        "cogs": round(cogs),
        "gross_profit": round(gross_profit),
        "payroll": total_monthly_payroll,
        "fixed_opex": round(total_fixed_opex),
        "total_opex": round(total_monthly_payroll + total_fixed_opex),
        "ebitda": round(ebitda),
    })

# Find break-even month
breakeven_month = None
for row in monthly_pl:
    if row["ebitda"] >= 0 and breakeven_month is None:
        breakeven_month = row["month"]

# Year 1 and Year 2 totals
y1 = [r for r in monthly_pl if r["month_num"] <= 12]
y2 = [r for r in monthly_pl if r["month_num"] > 12]

y1_revenue = sum(r["total_revenue"] for r in y1)
y1_ebitda = sum(r["ebitda"] for r in y1)
y2_revenue = sum(r["total_revenue"] for r in y2)
y2_ebitda = sum(r["ebitda"] for r in y2)

# Annualized mature (Y2 run rate x 12 months)
mature_monthly_rev = monthly_pl[-1]["total_revenue"]
mature_monthly_ebitda = monthly_pl[-1]["ebitda"]
mature_annual_rev = mature_monthly_rev * 12
mature_annual_ebitda = mature_monthly_ebitda * 12
mature_ebitda_margin = mature_annual_ebitda / mature_annual_rev

# ============================================================
# FRANCHISE EXPANSION MODEL (5-Year)
# ============================================================

# Assumptions
franchise_fee = 75000          # per franchise sold
royalty_rate = 0.07            # 7% of gross revenue
tech_licensing_monthly = 2500  # Vitalis OS / AI platform per location
marketing_fund = 0.02          # 2% of gross revenue

# Corporate store timeline
# Y1: Open Dallas flagship (corporate)
# Y2: Open 2nd corporate store (DFW or Houston)
# Y3: Open 3rd corporate store + sell first 3 franchises
# Y4: 6 franchises open + 3 corporate
# Y5: 12 franchises open + 3 corporate

franchise_plan = {
    "Y1": {"corporate": 1, "franchises": 0, "new_franchise_sales": 0},
    "Y2": {"corporate": 2, "franchises": 0, "new_franchise_sales": 0},
    "Y3": {"corporate": 3, "franchises": 2, "new_franchise_sales": 3},
    "Y4": {"corporate": 3, "franchises": 6, "new_franchise_sales": 4},
    "Y5": {"corporate": 3, "franchises": 12, "new_franchise_sales": 6},
}

# Revenue per mature corporate location (annualized)
corporate_mature_rev = mature_annual_rev
corporate_mature_ebitda = mature_annual_ebitda

# Franchise location revenue (slightly lower - franchisee keeps most)
franchise_location_rev = corporate_mature_rev * 0.85  # franchisees ramp slightly slower

franchise_5yr = []
cumulative_franchise_fees = 0
for yr, plan in franchise_plan.items():
    year_num = int(yr[1:])
    
    # Corporate revenue (ramp: Y1=40%, Y2=75%, Y3+=100%)
    corp_ramp = {1: 0.40, 2: 0.75, 3: 1.0, 4: 1.0, 5: 1.0}
    corp_rev = plan["corporate"] * corporate_mature_rev * corp_ramp.get(year_num, 1.0)
    corp_ebitda = plan["corporate"] * corporate_mature_ebitda * corp_ramp.get(year_num, 1.0)
    
    # Franchise fees (one-time)
    franchise_fees_yr = plan["new_franchise_sales"] * franchise_fee
    cumulative_franchise_fees += franchise_fees_yr
    
    # Royalties from open franchises (avg franchises open ~half year in year they open)
    open_franchises_avg = plan["franchises"] - plan["new_franchise_sales"] * 0.5
    royalty_rev = open_franchises_avg * franchise_location_rev * royalty_rate
    tech_rev = plan["franchises"] * tech_licensing_monthly * 12
    
    # Total corporate/franchisor revenue
    total_franchisor_rev = corp_rev + franchise_fees_yr + royalty_rev + tech_rev
    
    # Franchisor EBITDA (corporate EBITDA + franchise income - corporate overhead)
    # Corporate overhead scales: $500K Y1, $750K Y2, $1M Y3+
    corp_overhead = {1: 500000, 2: 750000, 3: 1000000, 4: 1000000, 5: 1000000}
    franchisor_ebitda = corp_ebitda + franchise_fees_yr + royalty_rev + tech_rev - corp_overhead[year_num]
    
    # Total system-wide revenue (all locations)
    franchise_system_rev = plan["franchises"] * franchise_location_rev
    total_system_rev = corp_rev + franchise_system_rev
    
    franchise_5yr.append({
        "year": yr,
        "corporate_locations": plan["corporate"],
        "franchise_locations": plan["franchises"],
        "total_locations": plan["corporate"] + plan["franchises"],
        "corporate_revenue": round(corp_rev),
        "franchise_fees": round(franchise_fees_yr),
        "royalty_revenue": round(royalty_rev),
        "tech_licensing_revenue": round(tech_rev),
        "total_franchisor_revenue": round(total_franchisor_rev),
        "franchisor_ebitda": round(franchisor_ebitda),
        "total_system_revenue": round(total_system_rev),
    })

# Valuation at Y5 (EBITDA multiple for healthcare franchise platforms)
# Comparable: Restore Hyper Wellness, Next Health - 8-12x EBITDA
y5_ebitda = franchise_5yr[-1]["franchisor_ebitda"]
valuation_low = y5_ebitda * 8
valuation_mid = y5_ebitda * 10
valuation_high = y5_ebitda * 12

# ============================================================
# OUTPUT SUMMARY
# ============================================================

summary = {
    "startup_capital": {
        "buildout": buildout_total,
        "equipment": total_equipment,
        "working_capital": working_capital,
        "pre_opening": pre_opening_marketing + legal_licensing,
        "total": total_startup,
        "ai_consulting_engagement": "Separate - see engagement proposal",
    },
    "monthly_fixed_opex": round(total_monthly_payroll + total_fixed_opex),
    "breakeven_month": breakeven_month,
    "year1_revenue": round(y1_revenue),
    "year1_ebitda": round(y1_ebitda),
    "mature_annual_revenue": round(mature_annual_rev),
    "mature_annual_ebitda": round(mature_annual_ebitda),
    "mature_ebitda_margin_pct": round(mature_ebitda_margin * 100, 1),
    "membership_tiers": tiers,
    "equipment_breakdown": equipment,
    "staff_monthly_cost": {k: v for k, v in staff.items()},
    "total_monthly_payroll": total_monthly_payroll,
    "monthly_pl": monthly_pl,
    "franchise_5yr": franchise_5yr,
    "y5_valuation": {
        "ebitda": y5_ebitda,
        "low_8x": valuation_low,
        "mid_10x": valuation_mid,
        "high_12x": valuation_high,
    },
}

print("=" * 60)
print("VITALIS LONGEVITY CLINIC - PROFORMA SUMMARY")
print("=" * 60)
print(f"\nSTARTUP CAPITAL REQUIRED: ${total_startup:,.0f}")
print(f"  Build-out ({sqft} sqft @ ${buildout_cost_psf}/sqft): ${buildout_total:,.0f}")
print(f"  Equipment & Technology: ${total_equipment:,.0f}")
print(f"  Working Capital: ${working_capital:,.0f}")
print(f"  Pre-Opening (Marketing + Legal): ${pre_opening_marketing + legal_licensing:,.0f}")
print(f"\nMONTHLY FIXED OPERATING COSTS: ${total_monthly_payroll + total_fixed_opex:,.0f}")
print(f"  Payroll (incl. benefits): ${total_monthly_payroll:,.0f}")
print(f"  Rent (NNN, {sqft} sqft): ${monthly_rent:,.0f}")
print(f"  Other Fixed Opex: ${total_fixed_opex - monthly_rent:,.0f}")
print(f"\nMEMBERSHIP TIERS:")
for tier, data in tiers.items():
    print(f"  {tier}: ${data['monthly']}/mo (${data['annual']:,}/yr)")
print(f"\nBREAK-EVEN: {breakeven_month}")
print(f"\nYEAR 1 REVENUE: ${y1_revenue:,.0f}")
print(f"YEAR 1 EBITDA: ${y1_ebitda:,.0f}")
print(f"\nMATURE LOCATION (Month 18+):")
print(f"  Annual Revenue: ${mature_annual_rev:,.0f}")
print(f"  Annual EBITDA: ${mature_annual_ebitda:,.0f}")
print(f"  EBITDA Margin: {mature_ebitda_margin*100:.1f}%")
print(f"\n5-YEAR FRANCHISE EXPANSION:")
print(f"{'Year':<6} {'Locations':<12} {'Franchisor Rev':<18} {'Franchisor EBITDA':<20} {'System Rev'}")
for row in franchise_5yr:
    print(f"{row['year']:<6} {row['total_locations']:<12} ${row['total_franchisor_revenue']:>14,.0f}   ${row['franchisor_ebitda']:>16,.0f}   ${row['total_system_revenue']:>14,.0f}")
print(f"\nY5 ENTERPRISE VALUATION:")
print(f"  8x EBITDA: ${valuation_low:,.0f}")
print(f"  10x EBITDA: ${valuation_mid:,.0f}")
print(f"  12x EBITDA: ${valuation_high:,.0f}")

# Save to JSON for use in website
with open("/home/ubuntu/vitalis_proforma_output.json", "w") as f:
    json.dump(summary, f, indent=2)
print("\nProforma saved to /home/ubuntu/vitalis_proforma_output.json")
