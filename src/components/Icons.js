'use client';
import {
    FaStethoscope, FaHeartbeat, FaMicroscope, FaSyringe, FaHeart,
    FaUserMd, FaHospital, FaBullseye, FaHandshake, FaClipboardList,
    FaCalendarAlt, FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt,
    FaEnvelope, FaClock, FaStar, FaStarHalfAlt, FaRegStar,
    FaChevronRight, FaArrowRight, FaCheck,
    FaInstagram, FaFacebookF, FaYoutube, FaLinkedinIn,
    FaMedkit, FaShieldAlt, FaBookOpen, FaQuoteLeft
} from 'react-icons/fa';
import {
    HiOutlineClipboardDocumentList
} from 'react-icons/hi2';
import {
    LuActivity, LuBrain, LuCalendarDays, LuStethoscope,
    LuHeart, LuMicroscope, LuSyringe, LuMapPin,
    LuPhone, LuMail, LuClock, LuMessageCircle, LuScanLine
} from 'react-icons/lu';

// Service icon mapping
const serviceIcons = {
    stethoscope: LuStethoscope,
    heart: LuHeart,
    microscope: LuMicroscope,
    syringe: LuSyringe,
    heartPulse: LuActivity,
    thyroid: LuScanLine,
};

// Why Us icon mapping
const whyUsIcons = {
    clipboard: FaClipboardList,
    hospital: FaHospital,
    target: FaBullseye,
    handshake: FaHandshake,
};

// Stats icons
const statIcons = [FaHospital, FaHeart, FaBookOpen, FaMedkit];

export function ServiceIcon({ iconKey, size = 28, ...props }) {
    const Icon = serviceIcons[iconKey] || LuStethoscope;
    return <Icon size={size} {...props} />;
}

export function WhyUsIcon({ iconKey, size = 24, ...props }) {
    const Icon = whyUsIcons[iconKey] || FaBullseye;
    return <Icon size={size} {...props} />;
}

export function StatIcon({ index, size = 28, ...props }) {
    const Icon = statIcons[index] || FaMedkit;
    return <Icon size={size} {...props} />;
}

// Direct icon exports for use across pages
export {
    FaCalendarAlt as CalendarIcon,
    FaPhoneAlt as PhoneIcon,
    FaWhatsapp as WhatsAppIcon,
    FaMapMarkerAlt as MapPinIcon,
    FaEnvelope as EmailIcon,
    FaClock as ClockIcon,
    FaStar as StarIcon,
    FaRegStar as StarEmptyIcon,
    FaCheck as CheckIcon,
    FaChevronRight as ChevronRightIcon,
    FaArrowRight as ArrowRightIcon,
    FaInstagram as InstagramIcon,
    FaFacebookF as FacebookIcon,
    FaYoutube as YouTubeIcon,
    FaLinkedinIn as LinkedInIcon,
    FaUserMd as DoctorIcon,
    FaHospital as HospitalIcon,
    FaMedkit as MedkitIcon,
    FaShieldAlt as ShieldIcon,
    FaQuoteLeft as QuoteIcon,
    LuActivity as ActivityIcon,
    LuCalendarDays as CalendarDaysIcon,
    LuMessageCircle as MessageIcon,
    FaBookOpen as BookIcon,
    FaStethoscope as StethoscopeIcon,
};
