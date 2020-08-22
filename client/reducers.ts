export const summaryReducer = data => ({
  newConfirmed: {
    cases: data.Global.NewConfirmed,
    deaths: data.Global.NewDeaths,
    recovered: data.Global.NewRecovered
  },
  total: {
    cases: data.Global.TotalConfirmed,
    deaths: data.Global.TotalDeaths,
    recovered: data.Global.TotalRecovered
  }
});
