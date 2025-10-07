import { 
  Zap, 
  Target, 
  Trophy, 
  Activity, 
  Clock, 
  Star,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Diamond,
  Heart,
  Dribbble
} from "lucide-react";

// Sport-specific icon components with professional, modern designs
export const SportIcons = {
  Football: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 3l2.5 7h7l-5.5 4 2 7-6-4.5-6 4.5 2-7-5.5-4h7L12 3z"/>
    </svg>
  ),
  
  Athletics: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="4" r="2"/>
      <path d="M8 7l4 10 4-10"/>
      <path d="M6 12l6 0 6 0"/>
      <path d="M10 20l4 0"/>
      <path d="M8 17l8 0"/>
    </svg>
  ),
  
  Badminton: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="8" rx="5" ry="3"/>
      <path d="M12 11v11"/>
      <path d="M9 22h6"/>
      <circle cx="12" cy="5" r="1" fill="currentColor"/>
      <path d="M8 8l8 0"/>
    </svg>
  ),
  
  Kabaddi: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="2"/>
      <path d="M8 10l4 0 4 0"/>
      <path d="M12 10v6"/>
      <path d="M9 13l-2 3 2 3h2"/>
      <path d="M15 13l2 3-2 3h-2"/>
      <path d="M10 19v3"/>
      <path d="M14 19v3"/>
    </svg>
  ),
  
  Hockey: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 21c0-4 0-8 0-12 0-2 2-4 4-4h10c2 0 4 2 4 4v12"/>
      <circle cx="19" cy="5" r="2" fill="currentColor"/>
      <path d="M12 5v16"/>
      <path d="M8 21l8 0"/>
    </svg>
  ),
  
  Cricket: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v16"/>
      <path d="M9 19l6 0"/>
      <circle cx="19" cy="19" r="2" fill="currentColor"/>
      <path d="M8 3l8 0"/>
      <path d="M10 3v3"/>
      <path d="M14 3v3"/>
      <path d="M12 6v3"/>
    </svg>
  ),
  
  Swimming: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 16c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0s3.5-1.5 5 0s3.5 1.5 5 0"/>
      <path d="M2 20c1.5-1.5 3.5-1.5 5 0s3.5 1.5 5 0s3.5-1.5 5 0s3.5 1.5 5 0"/>
      <circle cx="8" cy="8" r="3"/>
      <path d="M11 10l6-4"/>
      <path d="M17 6v6"/>
    </svg>
  ),
  
  Wrestling: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="8" cy="5" r="2"/>
      <circle cx="16" cy="5" r="2"/>
      <path d="M6 9l4 4-1 7"/>
      <path d="M18 9l-4 4 1 7"/>
      <path d="M10 13h4"/>
      <path d="M7 20h3"/>
      <path d="M14 20h3"/>
    </svg>
  ),
  
  Basketball: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 3v18"/>
      <path d="M3 12h18"/>
      <path d="M6.5 6.5c3-3 8-3 11 0"/>
      <path d="M6.5 17.5c3 3 8 3 11 0"/>
    </svg>
  ),
  
  Tennis: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9"/>
      <path d="M12 3v18"/>
      <path d="M7 9c2.5-1.5 5.5-1.5 8 0"/>
      <path d="M7 15c2.5 1.5 5.5 1.5 8 0"/>
    </svg>
  ),
  
  Volleyball: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="9"/>
      <path d="M3 12h18"/>
      <path d="M12 3c-4 3-4 9 0 18"/>
      <path d="M12 3c4 3 4 9 0 18"/>
    </svg>
  ),
  
  TableTennis: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <ellipse cx="12" cy="10" rx="7" ry="3"/>
      <path d="M12 13v7"/>
      <path d="M8 20h8"/>
      <circle cx="17" cy="7" r="2" fill="currentColor"/>
      <path d="M5 10l14 0"/>
    </svg>
  ),

  Boxing: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="2"/>
      <rect x="4" y="11" width="5" height="5" rx="2"/>
      <rect x="15" y="11" width="5" height="5" rx="2"/>
      <path d="M12 9v2"/>
      <path d="M10 14h4"/>
      <path d="M8 20l8 0"/>
    </svg>
  ),

  Cycling: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="6" cy="17" r="4"/>
      <circle cx="18" cy="17" r="4"/>
      <path d="M10 17h4"/>
      <path d="M12 7l3 6-5 4"/>
      <path d="M12 7v6"/>
      <path d="M8 7h8"/>
    </svg>
  ),

  Weightlifting: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="2"/>
      <rect x="6" y="11" width="12" height="3" rx="1"/>
      <rect x="4" y="9" width="3" height="7" rx="1"/>
      <rect x="17" y="9" width="3" height="7" rx="1"/>
      <path d="M10 17v5"/>
      <path d="M14 17v5"/>
    </svg>
  ),

  Golf: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v15"/>
      <circle cx="12" cy="20" r="2"/>
      <path d="M8 18h8"/>
      <path d="M12 3l5 3-5 2"/>
      <path d="M16 6v2"/>
    </svg>
  ),

  Chess: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 20h8"/>
      <path d="M6 18h12"/>
      <path d="M10 18v-5l2-7 2 7v5"/>
      <circle cx="12" cy="7" r="2"/>
      <path d="M10 5h4"/>
    </svg>
  ),

  Carrom: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <circle cx="12" cy="12" r="2" fill="currentColor"/>
      <circle cx="8" cy="8" r="1"/>
      <circle cx="16" cy="8" r="1"/>
      <circle cx="8" cy="16" r="1"/>
      <circle cx="16" cy="16" r="1"/>
    </svg>
  ),

  KhoKho: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="10" width="18" height="4" rx="2"/>
      <circle cx="8" cy="6" r="2"/>
      <circle cx="16" cy="18" r="2"/>
      <path d="M8 8v2"/>
      <path d="M16 14v2"/>
      <path d="M6 12h2"/>
      <path d="M16 12h2"/>
    </svg>
  ),

  MartialArts: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="2"/>
      <path d="M8 10l4 4 4-4"/>
      <path d="M12 14v6"/>
      <path d="M9 11l-3 6"/>
      <path d="M15 11l3 6"/>
      <path d="M10 20l4 0"/>
    </svg>
  ),

  Yoga: ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="5" r="2"/>
      <path d="M8 9c0 4 2 6 4 6s4-2 4-6"/>
      <path d="M12 15v6"/>
      <path d="M6 12l6 3 6-3"/>
      <path d="M10 21l4 0"/>
    </svg>
  ),

  // Fallback for unknown sports
  Default: ({ className }: { className?: string }) => (
    <Trophy className={className} />
  )
};

export interface Sport {
  id: string;
  name: string;
  category: 'olympic' | 'national' | 'popular' | 'traditional';
  icon: keyof typeof SportIcons;
}

export const SPORTS_LIST: Sport[] = [
  // Olympic Sports
  { id: 'athletics', name: 'Athletics', category: 'olympic', icon: 'Athletics' },
  { id: 'swimming', name: 'Swimming', category: 'olympic', icon: 'Swimming' },
  { id: 'basketball', name: 'Basketball', category: 'olympic', icon: 'Basketball' },
  { id: 'football', name: 'Football', category: 'olympic', icon: 'Football' },
  { id: 'volleyball', name: 'Volleyball', category: 'olympic', icon: 'Volleyball' },
  { id: 'tennis', name: 'Tennis', category: 'olympic', icon: 'Tennis' },
  { id: 'badminton', name: 'Badminton', category: 'olympic', icon: 'Badminton' },
  { id: 'table-tennis', name: 'Table Tennis', category: 'olympic', icon: 'TableTennis' },
  { id: 'boxing', name: 'Boxing', category: 'olympic', icon: 'Boxing' },
  { id: 'wrestling', name: 'Wrestling', category: 'olympic', icon: 'Wrestling' },
  { id: 'cycling', name: 'Cycling', category: 'olympic', icon: 'Cycling' },
  { id: 'weightlifting', name: 'Weightlifting', category: 'olympic', icon: 'Weightlifting' },
  { id: 'golf', name: 'Golf', category: 'olympic', icon: 'Golf' },

  // National & Popular Indian Sports
  { id: 'cricket', name: 'Cricket', category: 'national', icon: 'Cricket' },
  { id: 'hockey', name: 'Hockey', category: 'national', icon: 'Hockey' },
  { id: 'kabaddi', name: 'Kabaddi', category: 'traditional', icon: 'Kabaddi' },
  
  // Additional Popular Sports
  { id: 'chess', name: 'Chess', category: 'popular', icon: 'Chess' },
  { id: 'carrom', name: 'Carrom', category: 'traditional', icon: 'Carrom' },
  { id: 'kho-kho', name: 'Kho Kho', category: 'traditional', icon: 'KhoKho' },
  { id: 'martial-arts', name: 'Martial Arts', category: 'popular', icon: 'MartialArts' },
  { id: 'yoga', name: 'Yoga', category: 'traditional', icon: 'Yoga' },
];

export const getSportIcon = (sportId: string) => {
  const sport = SPORTS_LIST.find(s => s.id === sportId);
  return sport ? SportIcons[sport.icon] : SportIcons.Default;
};

export const getSportName = (sportId: string) => {
  const sport = SPORTS_LIST.find(s => s.id === sportId);
  return sport ? sport.name : sportId;
};

export const getSportsByCategory = (category: Sport['category']) => {
  return SPORTS_LIST.filter(sport => sport.category === category);
};