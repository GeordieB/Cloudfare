import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useDisplay } from 'vuetify';

export function useDisplayPort() {
  const display = useDisplay();
  const mdAndUp = ref(false);

  function handleResize() {
    mdAndUp.value = display.mdAndUp.value;
  }

  onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  });

  onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
  });

  return {
    mdAndUp,
  };
}
