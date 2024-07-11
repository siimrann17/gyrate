const nextConfig = {
  async rewrites() {
    return [
      {
        source:
          "/api/places/search/json?query=bank&location=30.350776649954703%2C%2076.37323121047312&region=IND&pod=CITY",
        destination: "https://atlas.mappls.com/",
      },
    ];
  },
};
