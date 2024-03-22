import { ref, onMounted, onUnmounted } from 'vue'

const useMobile = () => {
  const isMobile = ref(window.innerWidth <= 768)

  const updateMobileStatus = () => {
    isMobile.value = window.innerWidth <= 768
  }

  onMounted(() => {
    window.addEventListener('resize', updateMobileStatus)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateMobileStatus)
  })

  return { isMobile }
}

export default useMobile
