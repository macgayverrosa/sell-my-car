"use client";

import type React from "react";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { COUNTRIES } from "@/config/constants/const-countries";

type CountryCode = keyof typeof COUNTRIES;

// The component is now self-contained
export default function IconsFlag2({
  detectedCountry = "AU", // Use a prop for the detected country
}: {
  detectedCountry?: CountryCode;
}) {
  // 1. Initialize state by reading from localStorage just once.
  const [selectedCountry, setSelectedCountry] = useState<CountryCode>(() => {
    const savedCountry = localStorage.getItem("selectedCountry");
    if (savedCountry && savedCountry in COUNTRIES) {
      return savedCountry as CountryCode;
    }
    return detectedCountry;
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // 2. Derive `isManuallySelected` instead of storing it in state.
  const isManuallySelected = selectedCountry !== detectedCountry;

  // 3. Memoize the expensive filtering operation.
  const filteredCountries = useMemo(() => {
    if (!searchTerm) {
      return Object.entries(COUNTRIES);
    }
    return Object.entries(COUNTRIES).filter(([, country]) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const handleSelectCountry = (countryCode: CountryCode) => {
    setSelectedCountry(countryCode);
    localStorage.setItem("selectedCountry", countryCode);
    setIsOpen(false); // Close dialog on selection
  };

  const handleReset = () => {
    setSelectedCountry(detectedCountry);
    localStorage.removeItem("selectedCountry");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1 bg-transparent">
          <span>{COUNTRIES[selectedCountry].flag}</span>
          <span>{COUNTRIES[selectedCountry].name}</span>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Select Your Country</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Search countries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {isManuallySelected && (
            <div className="flex items-center justify-between rounded-lg bg-blue-50 p-3">
              <div className="flex items-center gap-2">
                <span>{COUNTRIES[detectedCountry].flag}</span>
                <span className="text-sm">
                  Auto-detected: {COUNTRIES[detectedCountry].name}
                </span>
              </div>
              <Button variant="ghost" size="sm" onClick={handleReset}>
                Use Detected
              </Button>
            </div>
          )}

          <div className="max-h-60 space-y-1 overflow-y-auto">
            {filteredCountries.map(([code, country]) => (
              <button
                key={code}
                onClick={() => handleSelectCountry(code as CountryCode)}
                className="flex w-full items-center justify-between rounded-lg p-3 text-left transition-colors hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{country.flag}</span>
                  <span className="font-medium">{country.name}</span>
                </div>
                {selectedCountry === code && <Check className="h-4 w-4 text-green-600" />}
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}