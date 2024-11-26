"use client";

import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { useState } from "react";

export default function Appointments() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className="banzai-offset rounded-full border border-solid border-transparent transition-colors flex items-center justify-center gap-2 [font-size:_clamp(.75rem,6vw,2rem)] leading-loose font-bold px-4 sm:px-5 sm:mx-auto"
        onClick={() => setIsOpen(true)}
      >
        <span className="banzai bg-clip-text text-transparent">
          Appointments
        </span>
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/70 duration-300 data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 flex w-screen items-center justify-center sm:pt-5 sm:px-5 md:pt-10 md:px-10 2xl:pt-20 2xl:px-20">
          <DialogPanel
            transition
            className="w-full max-w-[81rem] h-full bg-white duration-300 ease-out data-[closed]:scale-50 data-[closed]:translate-y-[100%] relative rounded-t sm:rounded-lg"
          >
            {/* <!-- Google Calendar Appointment Scheduling begin --> */}
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2H9PkHfk92wJYx7QiM3O869hpg479XpDRygGG_xuKzRIC7F9NcygTei5B9HfRBoDk6s7eMkXZT?gv=true"
              width="100%"
              height="100%"
            ></iframe>
            {/* <!-- end Google Calendar Appointment Scheduling --> */}
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
