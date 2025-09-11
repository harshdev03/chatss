"use client";
import React from "react";
import {
  ResponsiveModal,
  ResponsiveModalContent,
  ResponsiveModalDescription,
  ResponsiveModalHeader,
  ResponsiveModalTitle,
  ResponsiveModalTrigger,
} from "@/components/ui/responsive-modal-dependencies";
import { Button } from "@/components/ui/button";

type Side = "bottom";

const ResponsiveModalSide = () => {
  return (
    <div className="space-y-3">
      <div className="space-x-3">
        <Modal side="bottom" />
      </div>
    </div>
  );
};

const Modal = ({ side }: { side: Side }) => {
  return (
    <ResponsiveModal>
      <ResponsiveModalTrigger asChild>
        <Button variant="outline" className="font-medium">Enter Username !</Button>
      </ResponsiveModalTrigger>
      <ResponsiveModalContent side={side}>
        <ResponsiveModalHeader>
          <ResponsiveModalTitle>
            This dialog will popup from {side} on mobile.
          </ResponsiveModalTitle>
          <ResponsiveModalDescription>
           ng versions of Lorem
            Ipsum.
          </ResponsiveModalDescription>
        </ResponsiveModalHeader>
      </ResponsiveModalContent>
    </ResponsiveModal>
  );
};

export default ResponsiveModalSide;
