import AmazonLogo from "@/assets/amazon_logo.svg";
import AirBnb from "@/assets/airbnb.svg";
import GoogleLogo from "@/assets/google_logo.svg";
import MicrosoftLogo from "@/assets/microsoft_logo.svg";
import SpotifyLogo from "@/assets/spotify_logo.svg";
import metaLogo from "@/assets/meta_logo.svg";
import ibmLogo from "@/assets/ibm_logo.svg";
import Image from "next/image";

export const Sponcer = () => {
  return (
    <div className="py-8 md:py-12 ">
      <div className="container mx-auto">
        <div className="flex justify-center overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <div className="flex gap-14 ">
            <Image
              src={AmazonLogo}
              alt="AmazonLogo"
              className="logo-ticker-image"
            />
            <Image
              src={metaLogo}
              alt="Mailchimp Logo"
              className="logo-ticker-image"
            />
            <Image src={AirBnb} alt="AirBnb" className="logo-ticker-image" />
            <Image
              src={GoogleLogo}
              alt="GoogleLogo"
              className="logo-ticker-image"
            />
            <Image
              src={MicrosoftLogo}
              alt="MicrosoftLogo"
              className="logo-ticker-image"
            />
            <Image
              src={SpotifyLogo}
              alt="SpotifyLogo"
              className="logo-ticker-image"
            />
            <Image src={ibmLogo} alt="IBM Logo" className="logo-ticker-image" />
          </div>
        </div>
      </div>
    </div>
  );
};
