<template>
  <nav aria-label="Page navigation" class="mb-80">
    <ul class="pagination justify-content-center">
      <li :class="{ disabled: !pages.has_pre }" class="page-item">
        <button
          type="button"
          @click="getData(pages.current_page - 1)"
          class="page-link border-0"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      <li
        v-for="(page, index) in pages.total_pages"
        :key="index"
        :class="{ active: page === pages.current_page }"
        class="page-item"
      >
        <button type="button" @click="getData(page)" class="page-link border-0">
          {{ page }}
        </button>
      </li>

      <li :class="{ disabled: !pages.has_next }" class="page-item">
        <button
          type="button"
          @click="getData(pages.current_page + 1)"
          class="page-link border-0"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['pages', 'getData']
}
</script>
