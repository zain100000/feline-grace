/**
 * @file BuyNow.component.jsx
 * @module Components/BuyNow
 * @description Mobile-responsive luxury checkout, UAE 5% VAT billing, bank transfer verification & refund service screen.
 */

import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import {
  Copy,
  Check,
  ShieldCheck,
  Building2,
  Sparkles,
  Truck,
  MapPin,
  Receipt,
  RotateCcw,
  Send,
  HelpCircle,
  ShoppingBag,
  Calculator,
  FileText,
} from "lucide-react";

const BuyNow = () => {
  const location = useLocation();
  const pet = location.state?.selectedPet;

  // Calculate Numerical Price & VAT (Defaulting base price if string contains AED)
  const parsePrice = (priceStr) => {
    if (!priceStr) return 0;
    const numeric = parseFloat(priceStr.replace(/[^0-9.]/g, ""));
    return isNaN(numeric) ? 0 : numeric;
  };

  const basePrice = pet ? parsePrice(pet.price) : 0;
  const vatAmount = basePrice * 0.05; // 5% UAE Standard VAT
  const shippingFee = basePrice > 0 ? 0 : 0; // Free Luxury Express Delivery Across UAE
  const grandTotal = basePrice + vatAmount + shippingFee;

  const [copiedField, setCopiedField] = useState(null);
  const [orderSubmitted, setOrderSubmitted] = useState(false);
  const [refundSubmitted, setRefundSubmitted] = useState(false);
  const [sameAsDelivery, setSameAsDelivery] = useState(true);

  const [checkoutData, setCheckoutData] = useState({
    fullName: "",
    phone: "",
    email: "",
    emirate: "Dubai",
    building: "",
    streetAddress: "",
    trnVatNumber: "", // Optional Customer TRN
    paymentRef: "",
    // Billing Address Specific
    billingName: "",
    billingAddress: "",
  });

  const [refundData, setRefundData] = useState({
    orderRef: "",
    email: "",
    reason: "Order Cancellation",
    notes: "",
  });

  const bankDetails = {
    bankName: "Zand Bank P.J.S.C.",
    accountTitle: "MOHAMMAD ALAU SHAHEB ALI",
    accountNumber: "1002432142134225",
    iban: "AE330961002432142134225",
    swiftCode: "ZANDAEAA",
    companyTRN: "100492810300003", // Business Tax Registration Number
    branch: "Emaar Square, Building 6, Level 1 - Dubai",
  };

  const handleCopy = (field, value) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleCheckoutChange = (e) => {
    const { name, value } = e.target;
    setCheckoutData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRefundChange = (e) => {
    const { name, value } = e.target;
    setRefundData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckoutSubmit = (e) => {
    e.preventDefault();
    setOrderSubmitted(true);
  };

  const handleRefundSubmit = (e) => {
    e.preventDefault();
    setRefundSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[var(--tertiary,#FAF8F5)] text-[var(--primary,#1A1A1A)] pt-20 md:pt-24 pb-16 px-4 md:px-8 relative font-sans">
      <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-[var(--secondary,#C5A880)]/30 bg-white shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[var(--secondary,#C5A880)]" />
            <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-[var(--secondary,#C5A880)] uppercase">
              Luxury Reservation & Invoice
            </span>
          </div>
          <h1 className="font-serif text-2xl md:text-4xl font-bold text-[var(--primary,#1A1A1A)]">
            Checkout & Tax Invoice
          </h1>
        </div>

        {/* 3-Day Express Guarantee Banner */}
        <div className="bg-white border border-[var(--secondary,#C5A880)]/30 rounded-2xl p-3.5 md:p-4 flex items-center justify-center gap-2.5 md:gap-3 text-center shadow-sm">
          <Truck className="w-4 h-4 md:w-5 md:h-5 text-[var(--secondary,#C5A880)] shrink-0" />
          <p className="text-xs md:text-sm font-semibold">
            Guaranteed Delivery:{" "}
            <span className="text-[var(--secondary,#C5A880)] font-bold">
              Within 3 Days
            </span>{" "}
            Across All 7 UAE Emirates 🇦🇪
          </p>
        </div>

        {/* Main Grid: Left = Summary & Detailed Billing, Right = Forms */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
          {/* LEFT COLUMN: Selected Companion Summary & Itemized Tax Billing */}
          <div className="lg:col-span-5 bg-white border border-stone-200 rounded-3xl p-5 md:p-6 shadow-md relative lg:sticky lg:top-28 space-y-5 md:space-y-6 z-10 w-full">
            <div className="flex items-center gap-2 pb-3 border-b border-stone-100 text-[var(--secondary,#C5A880)]">
              <ShoppingBag className="w-5 h-5" />
              <h2 className="font-serif text-lg font-bold text-[var(--primary,#1A1A1A)]">
                Order & Billing Summary
              </h2>
            </div>

            {pet ? (
              <div className="space-y-4">
                <div className="relative h-48 sm:h-56 w-full rounded-2xl overflow-hidden bg-stone-100 border border-stone-200">
                  <img
                    src={pet.image}
                    alt={pet.name}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white text-[10px] font-semibold tracking-widest px-3 py-1 rounded-full uppercase">
                    {pet.breed}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[var(--primary,#1A1A1A)]">
                    {pet.name}
                  </h3>
                  <p className="text-xs text-stone-500 mt-1 line-clamp-2">
                    {pet.description}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 py-3 border-y border-stone-100 text-center text-xs bg-[var(--tertiary,#FAF8F5)] rounded-xl">
                  <div>
                    <span className="block text-[9px] md:text-[10px] text-stone-400 uppercase">
                      Origin
                    </span>
                    <span className="font-medium text-stone-800 truncate block px-1">
                      {pet.origin}
                    </span>
                  </div>
                  <div className="border-x border-stone-200">
                    <span className="block text-[9px] md:text-[10px] text-stone-400 uppercase">
                      Weight
                    </span>
                    <span className="font-medium text-stone-800 block">
                      {pet.stats?.weight || "N/A"}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] md:text-[10px] text-stone-400 uppercase">
                      Lifespan
                    </span>
                    <span className="font-medium text-stone-800 block">
                      {pet.stats?.lifespan || "N/A"}
                    </span>
                  </div>
                </div>

                {/* --- ITEMIZED BILLING BREAKDOWN WITH TAXES --- */}
                <div className="pt-2 space-y-2.5">
                  <div className="flex justify-between items-center text-xs text-stone-600">
                    <span>Companion Subtotal:</span>
                    <span className="font-mono font-medium">
                      AED{" "}
                      {basePrice.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs text-stone-600">
                    <span className="flex items-center gap-1">
                      VAT (5% Standard UAE Rate):
                    </span>
                    <span className="font-mono font-medium text-stone-800">
                      AED{" "}
                      {vatAmount.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="flex justify-between items-center text-xs text-stone-600">
                    <span>VIP Express Delivery (3-Day UAE):</span>
                    <span className="text-emerald-700 font-semibold uppercase text-[10px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      Complimentary
                    </span>
                  </div>

                  <div className="flex justify-between items-center pt-3 text-base font-bold border-t border-stone-200">
                    <span className="text-[var(--primary,#1A1A1A)]">
                      Total Due (Inc. VAT):
                    </span>
                    <span className="text-[var(--secondary,#C5A880)] font-mono text-lg">
                      AED{" "}
                      {grandTotal.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-[10px] text-stone-500 space-y-1">
                  <div className="flex justify-between">
                    <span>Tax Registration No (TRN):</span>
                    <span className="font-mono font-bold text-stone-700">
                      {bankDetails.companyTRN}
                    </span>
                  </div>
                  <p className="italic">
                    * All prices are subject to 5% Value Added Tax in accordance
                    with UAE Federal Decree-Law No. (8).
                  </p>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-3">
                <p className="text-sm text-stone-500">
                  No companion selected from the catalog.
                </p>
                <Link
                  to="/"
                  className="inline-block text-xs font-bold text-[var(--secondary,#C5A880)] uppercase tracking-wider underline"
                >
                  Select a Cat First
                </Link>
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: Delivery, Billing Details, Bank Transfer & Refund Request */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 w-full relative z-0">
            <form onSubmit={handleCheckoutSubmit} className="space-y-6">
              {/* 1. Delivery & Customer Form */}
              <div className="bg-white border border-stone-200 rounded-3xl p-5 md:p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
                  <MapPin className="w-5 h-5 text-[var(--secondary,#C5A880)] shrink-0" />
                  <h2 className="font-serif text-base md:text-lg font-semibold">
                    1. UAE Delivery & Contact Details
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 md:gap-4 text-xs">
                  <div>
                    <label className="font-semibold block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={checkoutData.fullName}
                      onChange={handleCheckoutChange}
                      placeholder="e.g. John Doe"
                      className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-[var(--secondary,#C5A880)]"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">
                      Email Address (For Tax Receipt) *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={checkoutData.email}
                      onChange={handleCheckoutChange}
                      placeholder="client@domain.ae"
                      className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-[var(--secondary,#C5A880)]"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">
                      Contact Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={checkoutData.phone}
                      onChange={handleCheckoutChange}
                      placeholder="+971 50 123 4567"
                      className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:border-[var(--secondary,#C5A880)]"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">
                      Emirate *
                    </label>
                    <select
                      name="emirate"
                      value={checkoutData.emirate}
                      onChange={handleCheckoutChange}
                      className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none"
                    >
                      <option value="Dubai">Dubai</option>
                      <option value="Abu Dhabi">Abu Dhabi</option>
                      <option value="Sharjah">Sharjah</option>
                      <option value="Ajman">Ajman</option>
                      <option value="Ras Al Khaimah">Ras Al Khaimah</option>
                      <option value="Fujairah">Fujairah</option>
                      <option value="Umm Al Quwain">Umm Al Quwain</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">
                      Building / Villa / Flat *
                    </label>
                    <input
                      type="text"
                      name="building"
                      value={checkoutData.building}
                      onChange={handleCheckoutChange}
                      placeholder="Villa 12B / Apt 402"
                      className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">
                      Street Address & Area *
                    </label>
                    <input
                      type="text"
                      name="streetAddress"
                      value={checkoutData.streetAddress}
                      onChange={handleCheckoutChange}
                      placeholder="Al Wasl Road, Jumeirah 1"
                      className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* 2. Billing Address & Tax Info */}
              <div className="bg-white border border-stone-200 rounded-3xl p-5 md:p-6 shadow-sm space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
                  <FileText className="w-5 h-5 text-[var(--secondary,#C5A880)] shrink-0" />
                  <h2 className="font-serif text-base md:text-lg font-semibold">
                    2. Tax Invoice & Billing Details
                  </h2>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="sameAsDelivery"
                      checked={sameAsDelivery}
                      onChange={(e) => setSameAsDelivery(e.target.checked)}
                      className="rounded text-[var(--secondary,#C5A880)] focus:ring-0"
                    />
                    <label
                      htmlFor="sameAsDelivery"
                      className="font-medium cursor-pointer"
                    >
                      Billing address is same as UAE delivery address
                    </label>
                  </div>

                  {!sameAsDelivery && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                      <div>
                        <label className="font-semibold block mb-1">
                          Billing Company / Name
                        </label>
                        <input
                          type="text"
                          name="billingName"
                          value={checkoutData.billingName}
                          onChange={handleCheckoutChange}
                          placeholder="Registered Legal Name"
                          className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200"
                        />
                      </div>
                      <div>
                        <label className="font-semibold block mb-1">
                          Billing Address
                        </label>
                        <input
                          type="text"
                          name="billingAddress"
                          value={checkoutData.billingAddress}
                          onChange={handleCheckoutChange}
                          placeholder="Full Tax Billing Address"
                          className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200"
                        />
                      </div>
                    </div>
                  )}

                  <div>
                    <label className="font-semibold block mb-1">
                      Customer Tax Registration No. / TRN (Optional)
                    </label>
                    <input
                      type="text"
                      name="trnVatNumber"
                      value={checkoutData.trnVatNumber}
                      onChange={handleCheckoutChange}
                      placeholder="15-digit UAE TRN (for corporate invoicing)"
                      className="w-full px-3 py-2.5 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Bank Transfer Details & TRN Verification */}
              <div className="bg-white border border-stone-200 rounded-3xl p-5 md:p-6 shadow-sm space-y-5 md:space-y-6">
                <div className="flex flex-wrap justify-between items-center gap-2 pb-3 border-b border-stone-100">
                  <div className="flex items-center gap-3">
                    <Building2 className="w-5 h-5 text-[var(--secondary,#C5A880)] shrink-0" />
                    <h2 className="font-serif text-base md:text-lg font-semibold">
                      3. Bank Wire Transfer Details
                    </h2>
                  </div>
                  <span className="flex items-center gap-1 text-[10px] text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified Account
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-xs">
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">
                      Bank Name
                    </span>
                    <span className="font-semibold block mt-0.5">
                      {bankDetails.bankName}
                    </span>
                  </div>
                  <div className="p-3 bg-stone-50 rounded-xl border border-stone-200">
                    <span className="text-stone-400 block text-[10px]">
                      Beneficiary Account Holder
                    </span>
                    <span className="font-semibold block mt-0.5 truncate">
                      {bankDetails.accountTitle}
                    </span>
                  </div>
                  <div className="sm:col-span-2 p-3 bg-stone-50 rounded-xl border border-stone-200 flex justify-between items-center gap-2">
                    <div className="min-w-0">
                      <span className="text-[10px] text-[var(--secondary,#C5A880)] font-semibold block">
                        IBAN Number (Transfer Exact Total Inc. VAT)
                      </span>
                      <span className="font-mono font-bold text-xs md:text-sm block truncate">
                        {bankDetails.iban}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy("iban", bankDetails.iban)}
                      className="p-2 bg-white rounded-lg border shrink-0 hover:bg-stone-50 active:scale-95 transition-transform"
                    >
                      {copiedField === "iban" ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* TRN / Payment Reference Input Box */}
                <div className="pt-2 space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Receipt className="w-4 h-4 text-[var(--secondary,#C5A880)] shrink-0" />
                    Bank Payment Reference / TRN Number *
                  </label>
                  <input
                    type="text"
                    name="paymentRef"
                    value={checkoutData.paymentRef}
                    onChange={handleCheckoutChange}
                    placeholder="Enter TRN or Bank Transaction Reference ID"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-[var(--secondary,#C5A880)] text-xs font-mono focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[var(--secondary,#C5A880)] text-white text-xs font-bold uppercase tracking-widest hover:bg-[var(--primary,#1A1A1A)] active:scale-[0.99] transition-all"
                >
                  Confirm Order & Issue Invoice
                </button>

                {orderSubmitted && (
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium text-center">
                    ✓ Order received! Official 5% VAT Tax Invoice sent to your
                    email. 3-day UAE delivery activated.
                  </div>
                )}
              </div>
            </form>

            {/* 4. Refund & Support Request Form */}
            <div className="bg-white border border-stone-200 rounded-3xl p-5 md:p-6 shadow-sm space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-stone-100">
                <RotateCcw className="w-5 h-5 text-[var(--secondary,#C5A880)] shrink-0" />
                <h2 className="font-serif text-base md:text-lg font-semibold">
                  Refund Policy & Tax Adjustment Support
                </h2>
              </div>

              <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-600 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-[var(--secondary,#C5A880)] shrink-0 mt-0.5" />
                <p>
                  Approved refunds will include tax reversals and will be
                  credited to your source bank account within{" "}
                  <strong>7 business days</strong>.
                </p>
              </div>

              <form onSubmit={handleRefundSubmit} className="space-y-3 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="font-semibold block mb-1">
                      Order / Ref ID *
                    </label>
                    <input
                      type="text"
                      name="orderRef"
                      value={refundData.orderRef}
                      onChange={handleRefundChange}
                      placeholder="e.g. TRN-98420"
                      className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200"
                      required
                    />
                  </div>
                  <div>
                    <label className="font-semibold block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={refundData.email}
                      onChange={handleRefundChange}
                      placeholder="client@domain.ae"
                      className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="font-semibold block mb-1">
                    Reason for Refund *
                  </label>
                  <select
                    name="reason"
                    value={refundData.reason}
                    onChange={handleRefundChange}
                    className="w-full px-3 py-2 rounded-xl bg-stone-50 border border-stone-200"
                  >
                    <option value="Order Cancellation">
                      Order Cancellation
                    </option>
                    <option value="Incorrect Transfer Amount">
                      Incorrect Transfer Amount
                    </option>
                    <option value="Delivery Schedule Conflict">
                      Delivery Schedule Conflict
                    </option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-5 py-2.5 rounded-xl border border-stone-800 text-stone-800 font-bold uppercase tracking-wider hover:bg-stone-800 hover:text-white transition-colors"
                >
                  <Send className="w-3.5 h-3.5" /> Submit Refund Request
                </button>

                {refundSubmitted && (
                  <div className="p-3 rounded-xl bg-stone-100 border border-stone-300 text-stone-800 text-xs font-medium text-center">
                    ✓ Refund ticket created. Our billing team will issue a tax
                    credit note within 7 business days.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
