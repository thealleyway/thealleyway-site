module.exports = {
  async redirects() {
    return [
      {
        source: "/archive",
        destination: "/archive/1",
        permanent: true,
      },
    ];
  },
};
