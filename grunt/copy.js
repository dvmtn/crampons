module.exports = {
  html: {
    files: [
      {
        expand: true,
        cwd: 'html/',
        src: ['**/*.html'],
        dest: 'dist/'
      }
    ]
  }
};
