import { ref } from 'vue'
import { defineStore } from 'pinia'
import { supabase } from '@/lib/supabaseClient'

export const usePlotsStore = defineStore('plots', () => {
  const plotCount = ref(null)

  async function fetchPlotCount() {
    if (plotCount.value !== null) return
    const { count, error } = await supabase
      .from('properties')
      .select('*', { count: 'exact', head: true })
    if (!error) plotCount.value = count
  }

  return { plotCount, fetchPlotCount }
})
