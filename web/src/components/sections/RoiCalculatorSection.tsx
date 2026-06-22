"use client";

import { useMemo, useState } from "react";
import type { HomepageContent } from "@/lib/content/schema";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface RoiCalculatorSectionProps {
  roiCalculator: HomepageContent["roiCalculator"];
}

export function RoiCalculatorSection({ roiCalculator }: RoiCalculatorSectionProps) {

  const [fleetSize, setFleetSize] = useState(
    roiCalculator.fleetSizeDefault
  );

  const [showResult, setShowResult] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  const calculations = useMemo(
    () => ({
      fuelSavings: fleetSize * 150,
      adminHours: Math.round(fleetSize * 1.3),
      collectionDays: 12,
    }),
    [fleetSize]
  );


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // here you can send email to backend
    console.log({
      name,
      email,
      fleetSize
    });

    setShowResult(true);
  };


  return (
    <div className="md:py-15 py-5 px-5 md:px-10 lg:px-10 xl:px-0 !bg-[#F3F4F5]">

      <RevealOnScroll variant="scale" className="max-w-5xl mx-auto">

        <div className="overflow-hidden rounded-2xl border border-[#C3C6D5] bg-white shadow-card-hover">


          <div className="bg-[#00327D] px-6 py-5 md:px-8 md:py-6">

            <h3 className="text-xl font-bold text-white md:text-2xl">
              {roiCalculator.title}
            </h3>

          </div>



          <div className="grid gap-8 p-6 md:grid-cols-2 md:gap-0 md:p-0">


            {/* LEFT SIDE SAME */}

            <div className="space-y-6 md:p-8">

              <div>

                <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Fleet Size (Vehicles)
                </label>


                <input
                  type="range"
                  min={1}
                  max={200}
                  value={fleetSize}
                  onChange={(e) => setFleetSize(Number(e.target.value))}
                  className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200"
                />


                <div className="mt-2 flex justify-between text-sm text-slate-500">

                  <span>1</span>

                  <span className="font-bold text-primary">
                    {fleetSize}
                  </span>

                  <span>200+</span>

                </div>

              </div>



              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Avg. Monthly Fuel Spend (RM)
                </label>


                <input
                  type="number"
                  placeholder={roiCalculator.fuelSpendPlaceholder}
                  className="w-full rounded-md border border-[#C3C6D5] bg-white px-4 py-4 text-sm"
                />

              </div>



              <div>

                <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-slate-500">
                  Manual Admin Hours/Week
                </label>


                <input
                  type="number"
                  placeholder={roiCalculator.adminHoursPlaceholder}
                  className="w-full rounded-md border border-[#C3C6D5] bg-white px-4 py-4 text-sm"
                />

              </div>


            </div>






            {/* RIGHT SIDE UPDATED */}

            <div className="space-y-5 bg-[#EDEEEF] p-6 md:p-8 md:m-5 m-0 rounded-lg">


              {!showResult ? (


                <form
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >


                  <div>

                    <p className="text-lg font-bold text-[#00327D]">

                      Your fleet could save

                      <span className="text-emerald-600">
                        {" "}
                        RM {calculations.fuelSavings.toLocaleString()}
                      </span>

                      {" "}per month

                    </p>


                    <p className="mt-2 text-sm text-[#434653]">
                      Enter your details to get the full breakdown.
                    </p>

                  </div>




                  <input

                    required
                    type="text"
                    placeholder="Name"

                    value={name}

                    onChange={(e) => setName(e.target.value)}

                    className="w-full rounded-md border border-[#C3C6D5] px-4 py-4 text-sm"

                  />




                  <input

                    required
                    type="email"
                    placeholder="Email"

                    value={email}

                    onChange={(e) => setEmail(e.target.value)}

                    className="w-full rounded-md border border-[#C3C6D5] px-4 py-4 text-sm"

                  />




                  <Button
                    type="submit"
                    className="mt-2 w-full !rounded-md bg-[#00327D] text-white !text-base"
                  >

                    Get Full Report

                  </Button>



                </form>



              ) : (



                <>


                  <div className="border-b-2 border-[#C3C6D5] pb-5">

                    <p className="text-xs uppercase text-[#434653]">
                      {roiCalculator.results.fuelSavingsLabel}
                    </p>

                    <p className="mt-1 text-2xl font-bold text-emerald-600">
                      RM {calculations.fuelSavings.toLocaleString()}
                    </p>

                  </div>




                  <div className="border-b-2 border-[#C3C6D5] pb-5">

                    <p className="text-xs uppercase text-[#434653]">
                      {roiCalculator.results.adminTimeLabel}
                    </p>


                    <p className="mt-1 text-2xl font-bold text-primary">
                      {calculations.adminHours} Hours
                    </p>


                  </div>




                  <div>

                    <p className="text-xs uppercase text-[#434653]">
                      {roiCalculator.results.collectionLabel}
                    </p>


                    <p className="mt-1 text-2xl font-bold text-primary">
                      {calculations.collectionDays} Days Faster
                    </p>


                  </div>


                </>


              )}


            </div>



          </div>


        </div>


      </RevealOnScroll>


    </div>
  );
}