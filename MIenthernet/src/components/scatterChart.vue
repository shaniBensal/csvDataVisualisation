
<script>
import { Scatter } from "vue-chartjs";

export default {
  props: ["data", "labels"],
  extends: Scatter,
  mounted() {
    this.renderScatterChart();
  },
  computed: {
    chartData() {
      return this.data;
    }
  },
  methods: {
    renderScatterChart() {
      this.renderChart(
        {
          labels: this.labels,
          datasets: [
            {
              label: "Customer Value",
              backgroundColor: "#f87979",
              data: this.chartData
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: this.labels[0]
                }
              }
            ],
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: this.labels[1]
                }
              }
            ]
          }
        }
      );
    }
  },
  watch: {
    data() {
      this.renderScatterChart();
    },
    labels() {
      this.renderScatterChart();
    }
  }
};
</script>
<style>
</style>
