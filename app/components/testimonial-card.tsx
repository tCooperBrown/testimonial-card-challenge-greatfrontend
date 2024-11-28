import Image from "next/image";

export default function TestimonialCard() {
  return (
    <div className="w-[340px] flex flex-col gap-4 bg-white p-6 rounded-lg drop-shadow-md h-fit">
      <div className="flex items-center gap-4">
        <Image
          src="/profile-thumbnail.png"
          width="48"
          height="48"
          alt="profile-thumbnail"
        />

        {/* User's full name and handle */}
        <div className="flex flex-col">
          <span className="text-neutral-900 text-base font-semibold">
            Sarah Dole
          </span>
          <span className="text-neutral-600 text-sm">@sarahdole</span>
        </div>
      </div>

      {/* Testimonial text */}
      <p className="text-neutral-600">
        I&apos;ve been searching for high-quality abstract images for my design
        projects, and I&apos;m thrilled to have found this platform. The variety
        and depth of creativity are astounding!
      </p>
    </div>
  );
}
