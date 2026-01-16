export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      companies: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      customers: {
        Row: {
          address: string | null
          city: string | null
          company_id: string
          created_at: string | null
          email: string | null
          id: string
          name: string
          notes: string | null
          phone: string | null
          service_type: string | null
          state: string | null
          tags: string[] | null
          updated_at: string | null
          zip: string | null
        }
        Insert: {
          address?: string | null
          city?: string | null
          company_id: string
          created_at?: string | null
          email?: string | null
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          service_type?: string | null
          state?: string | null
          tags?: string[] | null
          updated_at?: string | null
          zip?: string | null
        }
        Update: {
          address?: string | null
          city?: string | null
          company_id?: string
          created_at?: string | null
          email?: string | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          service_type?: string | null
          state?: string | null
          tags?: string[] | null
          updated_at?: string | null
          zip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "customers_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      equipment: {
        Row: {
          brand: string | null
          company_id: string
          created_at: string | null
          customer_id: string
          equipment_type: string
          id: string
          install_date: string | null
          last_service_date: string | null
          model: string | null
          notes: string | null
          serial_number: string | null
        }
        Insert: {
          brand?: string | null
          company_id: string
          created_at?: string | null
          customer_id: string
          equipment_type: string
          id?: string
          install_date?: string | null
          last_service_date?: string | null
          model?: string | null
          notes?: string | null
          serial_number?: string | null
        }
        Update: {
          brand?: string | null
          company_id?: string
          created_at?: string | null
          customer_id?: string
          equipment_type?: string
          id?: string
          install_date?: string | null
          last_service_date?: string | null
          model?: string | null
          notes?: string | null
          serial_number?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "equipment_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "equipment_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      estimates_invoices: {
        Row: {
          company_id: string
          created_at: string | null
          customer_id: string
          id: string
          job_id: string | null
          line_items: Json
          status: string
          subtotal: number
          tax: number
          total_amount: number
          updated_at: string | null
        }
        Insert: {
          company_id: string
          created_at?: string | null
          customer_id: string
          id?: string
          job_id?: string | null
          line_items?: Json
          status?: string
          subtotal?: number
          tax?: number
          total_amount?: number
          updated_at?: string | null
        }
        Update: {
          company_id?: string
          created_at?: string | null
          customer_id?: string
          id?: string
          job_id?: string | null
          line_items?: Json
          status?: string
          subtotal?: number
          tax?: number
          total_amount?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "estimates_invoices_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "estimates_invoices_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "estimates_invoices_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      inventory: {
        Row: {
          company_id: string
          created_at: string | null
          id: string
          item_name: string
          part_number: string | null
          qty_in_stock: number
          reorder_level: number
          truck_id: string | null
          unit_price: number
        }
        Insert: {
          company_id: string
          created_at?: string | null
          id?: string
          item_name: string
          part_number?: string | null
          qty_in_stock?: number
          reorder_level?: number
          truck_id?: string | null
          unit_price?: number
        }
        Update: {
          company_id?: string
          created_at?: string | null
          id?: string
          item_name?: string
          part_number?: string | null
          qty_in_stock?: number
          reorder_level?: number
          truck_id?: string | null
          unit_price?: number
        }
        Relationships: [
          {
            foreignKeyName: "inventory_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_truck_id_fkey"
            columns: ["truck_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      jobs: {
        Row: {
          assigned_tech_id: string | null
          company_id: string
          created_at: string | null
          customer_id: string
          id: string
          job_date: string
          job_type: string
          location: string | null
          notes: string | null
          photos_urls: string[] | null
          status: Database["public"]["Enums"]["job_status"]
          time_window_end: string
          time_window_start: string
          updated_at: string | null
        }
        Insert: {
          assigned_tech_id?: string | null
          company_id: string
          created_at?: string | null
          customer_id: string
          id?: string
          job_date: string
          job_type: string
          location?: string | null
          notes?: string | null
          photos_urls?: string[] | null
          status?: Database["public"]["Enums"]["job_status"]
          time_window_end: string
          time_window_start: string
          updated_at?: string | null
        }
        Update: {
          assigned_tech_id?: string | null
          company_id?: string
          created_at?: string | null
          customer_id?: string
          id?: string
          job_date?: string
          job_type?: string
          location?: string | null
          notes?: string | null
          photos_urls?: string[] | null
          status?: Database["public"]["Enums"]["job_status"]
          time_window_end?: string
          time_window_start?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "jobs_assigned_tech_id_fkey"
            columns: ["assigned_tech_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "jobs_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "jobs_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      maintenance_plans: {
        Row: {
          company_id: string
          created_at: string | null
          customer_id: string
          id: string
          next_scheduled_visit: string | null
          plan_name: string
          renewal_date: string | null
          status: string
        }
        Insert: {
          company_id: string
          created_at?: string | null
          customer_id: string
          id?: string
          next_scheduled_visit?: string | null
          plan_name: string
          renewal_date?: string | null
          status?: string
        }
        Update: {
          company_id?: string
          created_at?: string | null
          customer_id?: string
          id?: string
          next_scheduled_visit?: string | null
          plan_name?: string
          renewal_date?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "maintenance_plans_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "maintenance_plans_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          company_id: string
          customer_id: string
          delivery_status: string | null
          id: string
          job_id: string | null
          message_text: string
          message_type: string
          phone_number: string
          sent_at: string | null
        }
        Insert: {
          company_id: string
          customer_id: string
          delivery_status?: string | null
          id?: string
          job_id?: string | null
          message_text: string
          message_type: string
          phone_number: string
          sent_at?: string | null
        }
        Update: {
          company_id?: string
          customer_id?: string
          delivery_status?: string | null
          id?: string
          job_id?: string | null
          message_text?: string
          message_type?: string
          phone_number?: string
          sent_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "messages_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "messages_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          company_id: string
          id: string
          invoice_id: string | null
          payment_date: string | null
          payment_method: string
          stripe_charge_id: string | null
        }
        Insert: {
          amount: number
          company_id: string
          id?: string
          invoice_id?: string | null
          payment_date?: string | null
          payment_method: string
          stripe_charge_id?: string | null
        }
        Update: {
          amount?: number
          company_id?: string
          id?: string
          invoice_id?: string | null
          payment_date?: string | null
          payment_method?: string
          stripe_charge_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "payments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "estimates_invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          assigned_truck: string | null
          availability_status: string | null
          company_id: string | null
          email: string
          id: string
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string | null
        }
        Insert: {
          assigned_truck?: string | null
          availability_status?: string | null
          company_id?: string | null
          email: string
          id: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Update: {
          assigned_truck?: string | null
          availability_status?: string | null
          company_id?: string | null
          email?: string
          id?: string
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_my_company_id: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
    }
    Enums: {
      job_status: "scheduled" | "en_route" | "on_site" | "completed" | "invoiced"
      user_role: "owner" | "technician"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
