import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import React from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import CreateNoteDialog from "@/components/CreateNoteDialog";

const DashBoardPage = () => {
  return (
    <>
      <div className="grainy min-h-screen">
        <div className="max-w-7xl mx-auto p-10">
          <div className="h-14">
            <div className="flex items-center justify-between h-full md:flex-row flex-col">
              <div className="flex items-center">
                <Link href="/">
                  <Button className="bg-green-600">
                    <ArrowLeft className="mr-1 w-4 h-4" />
                    Back
                  </Button>
                </Link>
                <div className="w-4"></div>
                <h1 className="text-3xl font-bold text-gray-900">My Notes</h1>
                <div className="w-4"></div>
                <UserButton />
              </div>
            </div>
            <div className="h-8"></div>
            <Separator />
            <div className="h-8"></div>
            <div className="text-center">
              {/* TODO: Conditional Rendering */}
              <h2 className="text-xl text-gray-500">No Notes Added</h2>
            </div>
            {/* Display all Notes  */}
            <div className="grid sm:grid-cols-3 md:grid-cols-5 grid-cols-1 gap-3">
              <CreateNoteDialog />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoardPage;
