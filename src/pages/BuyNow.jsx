/**
 * @file BuyNow.component.jsx
 * @module Components/BuyNow
 * @description Luxury checkout & bank transfer acquisition screen for The Feline Grace.
 */

import React, { useState } from "react";
import {
  Copy,
  Check,
  ShieldCheck,
  Building2,
  Lock,
  Sparkles,
  Truck,
  MapPin,
} from "lucide-react";
import Button from "../utils/button/Button.util.jsx";

const BuyNow = () => {
  const [copiedField, setCopiedField] = useState(null);
  const [addressData, setAddressData] = useState({
    fullName: "",
    phone: "",
    emirate: "Dubai",
    streetAddress: "",
    building: "",
  });

  const bankDetails = {
    bankName: "Zand Bank P.J.S.C.",
    accountTitle: "MOHAMMAD ALAU SHAHEB ALI",
    accountNumber: "1002432142134225",
    iban: "AE330961002432142134225",
    swiftCode: "ZANDAEAA",
    branch: "Emaar Square, Building 6, Level 1 - Dubai",
  };

  const handleCopy = (field, value) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddressData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-[var(--tertiary)] text-[var(--primary)] pt-28 pb-16 px-4 md:px-8 relative overflow-hidden font-sans">
      {/* Background Decorative Gold Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[var(--secondary)]/20 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--secondary)]/30 bg-[var(--white)] shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[var(--secondary)]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[var(--secondary)] uppercase">
              Exclusive Acquisition
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[var(--primary)]">
            Complete Your Purchase
          </h1>
          <p className="text-sm md:text-base text-[var(--accent)] max-w-xl mx-auto font-light">
            Please enter your UAE delivery location and complete your deposit
            via wire transfer to finalize your reservation.
          </p>
        </div>

        {/* 3-Day Express Delivery Banner */}
        <div className="bg-[var(--white)] border border-[var(--secondary)]/30 rounded-2xl p-4 flex items-center justify-center gap-3 text-center shadow-sm">
          <div className="p-2 bg-[var(--secondary)]/10 rounded-full text-[var(--secondary)]">
            <Truck className="w-5 h-5" />
          </div>
          <p className="text-xs md:text-sm font-semibold text-[var(--primary)]">
            Express Delivery Guarantee:{" "}
            <span className="text-[var(--secondary)] font-bold">
              Within 3 Days
            </span>{" "}
            Across All 7 UAE Emirates 🇦🇪
          </p>
        </div>

        {/* SECTION 1: Delivery Address Form */}
        <div className="bg-[var(--white)]/90 backdrop-blur-xl border border-[var(--secondary)]/30 rounded-3xl p-6 md:p-8 shadow-lg shadow-[var(--primary)]/5 space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-[var(--gray)]">
            <div className="p-2.5 bg-[var(--tertiary)] border border-[var(--secondary)]/30 rounded-xl">
              <MapPin className="w-5 h-5 text-[var(--secondary)]" />
            </div>
            <div>
              <h2 className="font-serif text-xl font-semibold text-[var(--primary)]">
                1. Delivery Destination (UAE Only)
              </h2>
              <p className="text-xs text-[var(--accent)]">
                Enter where you would like your order delivered within 3 days.
              </p>
            </div>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider block">
                Full Name *
              </label>
              <input
                type="text"
                name="fullName"
                value={addressData.fullName}
                onChange={handleInputChange}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--tertiary)] border border-[var(--gray)] text-sm focus:outline-none focus:border-[var(--secondary)] transition-colors"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider block">
                Contact Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={addressData.phone}
                onChange={handleInputChange}
                placeholder="+971 50 123 4567"
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--tertiary)] border border-[var(--gray)] text-sm focus:outline-none focus:border-[var(--secondary)] transition-colors"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider block">
                Emirate *
              </label>
              <select
                name="emirate"
                value={addressData.emirate}
                onChange={handleInputChange}
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--tertiary)] border border-[var(--gray)] text-sm focus:outline-none focus:border-[var(--secondary)] transition-colors"
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

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider block">
                Building / Villa / Flat No. *
              </label>
              <input
                type="text"
                name="building"
                value={addressData.building}
                onChange={handleInputChange}
                placeholder="Villa 12B / Tower A, Apt 402"
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--tertiary)] border border-[var(--gray)] text-sm focus:outline-none focus:border-[var(--secondary)] transition-colors"
                required
              />
            </div>

            <div className="md:col-span-2 space-y-1.5">
              <label className="text-xs font-semibold text-[var(--primary)] uppercase tracking-wider block">
                Street Address & Area *
              </label>
              <input
                type="text"
                name="streetAddress"
                value={addressData.streetAddress}
                onChange={handleInputChange}
                placeholder="Al Wasl Road, Jumeirah 1"
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--tertiary)] border border-[var(--gray)] text-sm focus:outline-none focus:border-[var(--secondary)] transition-colors"
                required
              />
            </div>
          </form>
        </div>

        {/* SECTION 2: Bank Transfer Details */}
        <div className="bg-[var(--white)]/90 backdrop-blur-xl border border-[var(--secondary)]/30 rounded-3xl p-6 md:p-10 shadow-lg shadow-[var(--primary)]/5 space-y-8 relative">
          {/* Card Top Banner */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-[var(--gray)]">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[var(--tertiary)] border border-[var(--secondary)]/30 rounded-2xl">
                <Building2 className="w-6 h-6 text-[var(--secondary)]" />
              </div>
              <div>
                <span className="text-xs text-[var(--secondary)] font-mono tracking-wider uppercase block">
                  Official UAE Bank
                </span>
                <p className="font-serif text-lg font-semibold text-[var(--primary)]">
                  {bankDetails.bankName}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-[var(--success)] bg-[var(--success)]/10 border border-[var(--success)]/20 px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-semibold tracking-wide">
                Verified VIP Merchant Account
              </span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Holder Name */}
            <div className="space-y-1.5 p-4 rounded-2xl bg-[var(--tertiary)] border border-[var(--secondary)]/20">
              <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wider block">
                Account Holder Name
              </span>
              <p className="font-semibold text-sm md:text-base text-[var(--primary)]">
                {bankDetails.accountTitle}
              </p>
            </div>

            {/* Bank Address */}
            <div className="space-y-1.5 p-4 rounded-2xl bg-[var(--tertiary)] border border-[var(--secondary)]/20">
              <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wider block">
                Bank Address
              </span>
              <p className="font-semibold text-sm md:text-base text-[var(--primary)]">
                {bankDetails.branch}
              </p>
            </div>

            {/* IBAN Number (Copyable) */}
            <div className="md:col-span-2 space-y-2 p-4 rounded-2xl bg-[var(--tertiary)] border border-[var(--secondary)]/30">
              <span className="text-xs font-semibold text-[var(--secondary)] uppercase tracking-wider block">
                International Bank Account Number (IBAN)
              </span>
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-sm md:text-lg font-bold text-[var(--primary)] tracking-widest break-all">
                  {bankDetails.iban}
                </p>
                <button
                  onClick={() => handleCopy("iban", bankDetails.iban)}
                  className="p-2.5 rounded-xl bg-[var(--white)] border border-[var(--secondary)]/30 hover:bg-[var(--secondary)] hover:text-[var(--white)] text-[var(--primary)] transition-all duration-300 shadow-sm"
                  aria-label="Copy IBAN"
                >
                  {copiedField === "iban" ? (
                    <Check className="w-4 h-4 text-[var(--success)]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Account Number (Copyable) */}
            <div className="space-y-2 p-4 rounded-2xl bg-[var(--tertiary)] border border-[var(--secondary)]/20">
              <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wider block">
                Account Number
              </span>
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-sm md:text-base font-semibold text-[var(--primary)]">
                  {bankDetails.accountNumber}
                </p>
                <button
                  onClick={() => handleCopy("acc", bankDetails.accountNumber)}
                  className="p-2 rounded-lg bg-[var(--white)] border border-[var(--secondary)]/30 hover:bg-[var(--secondary)] hover:text-[var(--white)] text-[var(--primary)] transition-all duration-300 shadow-sm"
                >
                  {copiedField === "acc" ? (
                    <Check className="w-3.5 h-3.5 text-[var(--success)]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* SWIFT / BIC Code (Copyable) */}
            <div className="space-y-2 p-4 rounded-2xl bg-[var(--tertiary)] border border-[var(--secondary)]/20">
              <span className="text-xs font-medium text-[var(--accent)] uppercase tracking-wider block">
                SWIFT / BIC Code
              </span>
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-sm md:text-base font-semibold text-[var(--primary)]">
                  {bankDetails.swiftCode}
                </p>
                <button
                  onClick={() => handleCopy("swift", bankDetails.swiftCode)}
                  className="p-2 rounded-lg bg-[var(--white)] border border-[var(--secondary)]/30 hover:bg-[var(--secondary)] hover:text-[var(--white)] text-[var(--primary)] transition-all duration-300 shadow-sm"
                >
                  {copiedField === "swift" ? (
                    <Check className="w-3.5 h-3.5 text-[var(--success)]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Verification Notice */}
          <div className="pt-4 border-t border-[var(--gray)] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[var(--accent)]">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[var(--secondary)]" />
              <span>
                Include your full name in the bank transfer reference note.
              </span>
            </div>
            <p className="font-mono font-medium">
              Delivery window starts upon transfer confirmation.
            </p>
          </div>
        </div>

        {/* Return Button */}
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[var(--secondary)] hover:text-[var(--primary)] uppercase transition-colors duration-300"
          >
            ← Return to Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;
