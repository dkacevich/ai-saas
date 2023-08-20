import Link from "next/link";
import {Button} from "@/components/ui/button";

const LandingPage = () => (
    <div>Landing Page (unprotected)
        <div>
            <Link href='/sign-in'>
                <Button>Sign In</Button>
            </Link>
            <Link href='/sign-up'>
                <Button>Sign up</Button>
            </Link>


        </div>
    </div>
);

export default LandingPage
