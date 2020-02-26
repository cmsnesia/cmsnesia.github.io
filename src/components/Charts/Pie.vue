<script>
import { Pie } from 'vue-chartjs'
export default {
  name: 'Pie',
  extends: Pie,
  data: () => ({
    chartdata: {
      labels: ['January', 'February', 'March'],
      datasets: [{
        backgroundColor: [
          'rgba(112,213,213,0.78)',
          'rgba(82,191,246,0.74)',
          'rgba(89,255,154,0.67)'
        ],
        data: [10, 20, 30]
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>

<style scoped>

</style>
