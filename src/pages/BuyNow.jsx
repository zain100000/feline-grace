/**
 * @file BuyNow.component.jsx
 * @module Components/BuyNow
 * @description Luxury bank details acquisition screen for reserve and purchase transactions.
 */

import React, { useState } from "react";
import { Copy, Check, ShieldCheck, Building2, CreditCard, Lock, Sparkles } from "lucide-react";
import Button from "../utils/button/Button.util.jsx";

const BuyNow = () => {
  const [copiedField, setCopiedField] = useState(null);

  const bankDetails = {
    bankName: "Royal Crest International Bank",
    accountTitle: "The Feline Grace Luxury Pet Reserve",
    accountNumber: "4892 0192 8830 1902",
    iban: "GB82 RCIB 4892 0192 8830 1902 01",
    swiftCode: "RCIBGB2L",
    branch: "Mayfair Executive Branch, London",
  };

  const handleCopy = (field, value) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="min-h-screen bg-[#0A0D0A] text-[#E8E4DA] pt-28 pb-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background Decorative Gold Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#C5A880]/15 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-10">
        {/* Header Section */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C5A880]/30 bg-[#141A14]">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#C5A880] uppercase">
              Exclusive Acquisition
            </span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-[#FAF8F5]">
            Direct Wire Transfer Details
          </h1>
          <p className="text-sm md:text-base text-[#E8E4DA]/70 max-w-xl mx-auto font-light">
            To finalize your adoption or reservation, please submit your deposit via official bank transfer to our verified escrow accounts.
          </p>
        </div>

        {/* Central Royal Card Container */}
        <div className="bg-[#111611]/90 backdrop-blur-xl border border-[#C5A880]/30 rounded-3xl p-6 md:p-10 shadow-2xl space-y-8 relative">
          
          {/* Card Top Banner */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-6 border-b border-[#C5A880]/20">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#C5A880]/10 border border-[#C5A880]/30 rounded-2xl">
                <Building2 className="w-6 h-6 text-[#C5A880]" />
              </div>
              <div>
                <span className="text-xs text-[#C5A880] font-mono tracking-wider uppercase block">
                  Official Institution
                </span>
                <p className="font-serif text-lg font-semibold text-[#FAF8F5]">
                  {bankDetails.bankName}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3.5 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4" />
              <span>Verified VIP Merchant Account</span>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Account Title */}
            <div className="space-y-1.5 p-4 rounded-2xl bg-[#171E17] border border-[#C5A880]/10">
              <span className="text-xs font-medium text-[#C5A880]/80 uppercase tracking-wider block">
                Account Holder Title
              </span>
              <p className="font-semibold text-sm md:text-base text-[#FAF8F5]">
                {bankDetails.accountTitle}
              </p>
            </div>

            {/* Branch Location */}
            <div className="space-y-1.5 p-4 rounded-2xl bg-[#171E17] border border-[#C5A880]/10">
              <span className="text-xs font-medium text-[#C5A880]/80 uppercase tracking-wider block">
                Branch Location
              </span>
              <p className="font-semibold text-sm md:text-base text-[#FAF8F5]">
                {bankDetails.branch}
              </p>
            </div>

            {/* IBAN Number (Copyable) */}
            <div className="md:col-span-2 space-y-2 p-4 rounded-2xl bg-[#171E17] border border-[#C5A880]/20">
              <span className="text-xs font-medium text-[#C5A880] uppercase tracking-wider block">
                International Bank Account Number (IBAN)
              </span>
              <div className="flex items-center justify-between gap-4">
                <p className="font-mono text-sm md:text-lg font-bold text-[#FAF8F5] tracking-widest break-all">
                  {bankDetails.iban}
                </p>
                <button
                  onClick={() => handleCopy("iban", bankDetails.iban)}
                  className="p-2.5 rounded-xl bg-[#C5A880]/10 border border-[#C5A880]/30 hover:bg-[#C5A880] hover:text-[#0A0D0A] transition-all duration-300"
                  aria-label="Copy IBAN"
                >
                  {copiedField === "iban" ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Account Number (Copyable) */}
            <div className="space-y-2 p-4 rounded-2xl bg-[#171E17] border border-[#C5A880]/10">
              <span className="text-xs font-medium text-[#C5A880]/80 uppercase tracking-wider block">
                Account Number
              </span>
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-sm md:text-base font-semibold text-[#FAF8F5]">
                  {bankDetails.accountNumber}
                </p>
                <button
                  onClick={() => handleCopy("acc", bankDetails.accountNumber)}
                  className="p-2 rounded-lg bg-[#C5A880]/10 border border-[#C5A880]/30 hover:bg-[#C5A880] hover:text-[#0A0D0A] transition-all"
                >
                  {copiedField === "acc" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            {/* SWIFT / BIC Code (Copyable) */}
            <div className="space-y-2 p-4 rounded-2xl bg-[#171E17] border border-[#C5A880]/10">
              <span className="text-xs font-medium text-[#C5A880]/80 uppercase tracking-wider block">
                SWIFT / BIC Code
              </span>
              <div className="flex items-center justify-between gap-2">
                <p className="font-mono text-sm md:text-base font-semibold text-[#FAF8F5]">
                  {bankDetails.swiftCode}
                </p>
                <button
                  onClick={() => handleCopy("swift", bankDetails.swiftCode)}
                  className="p-2 rounded-lg bg-[#C5A880]/10 border border-[#C5A880]/30 hover:bg-[#C5A880] hover:text-[#0A0D0A] transition-all"
                >
                  {copiedField === "swift" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Verification Notice */}
          <div className="pt-4 border-t border-[#C5A880]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-[#E8E4DA]/60">
            <div className="flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#C5A880]" />
              <span>Please reference your full name and reference ID in transfer notes.</span>
            </div>
            <p className="font-mono">Confirmation SLA: Within 24 Business Hours</p>
          </div>
        </div>

        {/* Return Button */}
        <div className="text-center">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#C5A880] hover:text-[#FAF8F5] uppercase transition-colors duration-300"
          >
            ← Return to Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default BuyNow;