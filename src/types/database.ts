export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type QuoteRequestStatus =
  | "pending"
  | "in_review"
  | "contacted"
  | "approved"
  | "rejected"
  | "completed";

export interface QuoteRequest {
  id: string;
  created_at: string;
  updated_at: string;
  customer_name: string;
  whatsapp_number: string;
  email: string | null;
  company_name: string | null;
  product_category: string;
  product_type: string;
  quantity: number;
  material: string | null;
  color: string | null;
  sizes: string | null;
  finishing: string | null;
  target_deadline: string | null;
  design_file_path: string | null;
  design_file_name: string | null;
  notes: string | null;
  status: QuoteRequestStatus;
}

export interface QuoteRequestInsert {
  id?: string;
  created_at?: string;
  updated_at?: string;
  customer_name: string;
  whatsapp_number: string;
  email?: string | null;
  company_name?: string | null;
  product_category: string;
  product_type: string;
  quantity: number;
  material?: string | null;
  color?: string | null;
  sizes?: string | null;
  finishing?: string | null;
  target_deadline?: string | null;
  design_file_path?: string | null;
  design_file_name?: string | null;
  notes?: string | null;
  status?: QuoteRequestStatus;
}

export interface RateLimitLog {
  id: string;
  lookup_key: string;
  action: string;
  created_at: string;
}

export interface RateLimitLogInsert {
  id?: string;
  lookup_key: string;
  action?: string;
  created_at?: string;
}

export interface Database {
  public: {
    Tables: {
      quote_requests: {
        Row: QuoteRequest;
        Insert: QuoteRequestInsert;
        Update: Partial<QuoteRequestInsert>;
        Relationships: [];
      };
      rate_limit_log: {
        Row: RateLimitLog;
        Insert: RateLimitLogInsert;
        Update: Partial<RateLimitLogInsert>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
