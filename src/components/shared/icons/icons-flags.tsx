// "use client";

// import type React from "react";
// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { ChevronDown, Check } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "@/components/ui/dialog";
// import { Input } from "@/components/ui/input";
// import { COUNTRIES } from "@/config/constants/const-countries";

// type CountryCode = keyof typeof COUNTRIES;

// function useCountrySelection(detectedCountry: CountryCode) {
//   const [selectedCountry, setSelectedCountry] =
//     useState<CountryCode>(detectedCountry);
//   const [isManuallySelected, setIsManuallySelected] = useState(false);

//   useEffect(() => {
//     // Load saved country preference from localStorage
//     const savedCountry = localStorage.getItem("selectedCountry");
//     const isManual = localStorage.getItem("isManuallySelected") === "true";

//     if (savedCountry && isManual && savedCountry in COUNTRIES) {
//       setSelectedCountry(savedCountry as CountryCode);
//       setIsManuallySelected(true);
//     }
//   }, []);

//   const selectCountry = (countryCode: CountryCode) => {
//     setSelectedCountry(countryCode);
//     setIsManuallySelected(true);
//     localStorage.setItem("selectedCountry", countryCode);
//     localStorage.setItem("isManuallySelected", "true");
//   };

//   const resetToDetected = () => {
//     setSelectedCountry(detectedCountry);
//     setIsManuallySelected(false);
//     localStorage.removeItem("selectedCountry");
//     localStorage.removeItem("isManuallySelected");
//   };

//   return {
//     selectedCountry,
//     isManuallySelected,
//     selectCountry,
//     resetToDetected,
//   };
// }

// function CountrySelector({
//   selectedCountry,
//   onCountrySelect,
//   detectedCountry,
//   isManuallySelected,
//   onReset,
// }: {
//   selectedCountry: CountryCode;
//   onCountrySelect: (country: CountryCode) => void;
//   detectedCountry: CountryCode;
//   isManuallySelected: boolean;
//   onReset: () => void;
// }) {
//   const [searchTerm, setSearchTerm] = useState("");
//   const filteredCountries = Object.entries(COUNTRIES).filter(
//     ([_code, country]) =>
//       country.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <Dialog>
//       <DialogTrigger asChild>
//         <Button variant="ghost" size="sm" className="gap-1 bg-transparent">
//           <span>{COUNTRIES[selectedCountry].flag}</span>
//           <span>{COUNTRIES[selectedCountry].name}</span>
//           <ChevronDown className="w-4 h-4" />
//         </Button>
//       </DialogTrigger>
//       <DialogContent className="max-w-md">
//         <DialogHeader>
//           <DialogTitle>Select Your Country</DialogTitle>
//         </DialogHeader>
//         <div className="space-y-4">
//           <Input
//             placeholder="Search countries..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />

//           {isManuallySelected && (
//             <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
//               <div className="flex items-center gap-2">
//                 <span>{COUNTRIES[detectedCountry].flag}</span>
//                 <span className="text-sm">
//                   Auto-detected: {COUNTRIES[detectedCountry].name}
//                 </span>
//               </div>
//               <Button variant="ghost" size="sm" onClick={onReset}>
//                 Use Detected
//               </Button>
//             </div>
//           )}

//           <div className="max-h-60 overflow-y-auto space-y-1">
//             {filteredCountries.map(([code, country]) => (
//               <button
//                 key={code}
//                 onClick={() => onCountrySelect(code as CountryCode)}
//                 className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors"
//               >
//                 <div className="flex items-center gap-3">
//                   <span className="text-xl">{country.flag}</span>
//                   <span className="font-medium">{country.name}</span>
//                   {code}
//                 </div>
//                 {selectedCountry === code && (
//                   <Check className="w-4 h-4 text-green-600" />
//                 )}
//               </button>
//             ))}
//           </div>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// }

// export default function SiteFlags() {
//   const detectedCountry = "AU" as CountryCode;
//   const {
//     selectedCountry,
//     isManuallySelected,
//     selectCountry,
//     resetToDetected,
//   } = useCountrySelection(detectedCountry);

//   return (
//     <CountrySelector
//       selectedCountry={selectedCountry}
//       onCountrySelect={selectCountry}
//       detectedCountry={detectedCountry}
//       isManuallySelected={isManuallySelected}
//       onReset={resetToDetected}
//     />
//   );
// }
