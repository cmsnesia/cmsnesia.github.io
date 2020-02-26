<script>
import { Bar } from 'vue-chartjs'
export default {
  name: 'Bar',
  extends: Bar,
  data: () => ({
    chartdata: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          label: 'Data One',
          backgroundColor: '#53c1e8',
          data: [10, 20, 30, 40, 50, 60]
        }
      ]
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
