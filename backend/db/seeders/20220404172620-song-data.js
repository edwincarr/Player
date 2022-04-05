'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkInsert('Songs', [
        {userId:1, albumId:1,title: 'banger', url: 'https://www.learningcontainer.com/wp-content/uploads/2020/02/Kalimba.mp3'},
        {userId:2, albumId:2,title: 'can u be', url:'https://music-for-edwin.s3.us-east-2.amazonaws.com/Y2Mate.is%20-%20kanye%20west%20-%20can%20u%20be%20%28best%20quality%29-V6k9jlIbt98-48k-1649117707796.mp3?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJIMEYCIQDNedKwCfDLpst3%2BxRhOHpOCh2jmVn1YbrnVv0lpd8W9gIhALTRtrmDhZSjeyAT5%2BTi0UbDY8guizakj2BzEtejkk7ZKu0CCIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQARoMNTM4NjkyNzkxOTQ2Igyeobko8jbVUbWLOIkqwQKfM2aign2JDipEmXJrvz4fSFbEb%2BXqdVkP9kct5ZVmCQpl2JMchoyCZe2qeyqsmizHQInzqBtzzfyFo9O7tM4TGQ%2BqmLjuzd5VTHMMdZU2o1RsJ4%2Br%2BNUHopfG4yJuI6oCCUpkTu1Yu99T2bwpg%2B8jxnUyAerVUPHP57t0B2%2FcSoYN0A%2Fy82LQZ9mySWLipZJDDdq5x6CXjf%2BtouXNQ%2FeGb9ZDnCTbrh74UoKpgA6Mutj69SeDiO1U63bhciVarqJ%2B1zDC27Gj0MX0OtEE5TXxgCNLDWYSykL23hKnc5AzJlouaZzLm0znYSbC769cgd5Gmye2Bjwj1pQa9LFhxKRVdHOlj3rEHJHLTfG4c3%2FTFXc4Yg8hh7q2WP%2FcejW2l1kj9W5DpRygkME4nfxxq83Ve27w7Ssfj2KbbXyHLY90w2Ew%2BIaukgY6sgKigE4F9G8nt7APuqWn2ZtheuiseTMTQVWuvkb5d74BVa2nKCRZWFWlRu3AG%2Fl4ZPPJYMlk7UgE2EeGJopxXtil32UjDSIfBpwjCshPLhoXNIibrW1%2BBd%2FKzVC6T32q24smftuCScv4NghSaXFjCAQdf52jv9u35W2io39ve%2FXNshkp%2FCpWCXpuOuniWwZPpH2JDd%2FmZmrMPZne2VzgsI0U21E3mLk%2Bfb9Iy5aHFDgOVDIjiml1pfT3tpomMgosobWCWHUr1SGsbq1S0jcNWHL1AjHAaCK2HSbbhV16TfhMHH1RzoKVIRLe4nor440sgX8%2FlURCMuB8uWSIs9aWvl7fvhufHRgwsF%2Brh0bBIS6%2FNIVy2eJMKDwkS8xLZJhdv5aUjnmimJ9ELg%2FbT5WXSr33u0s%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220405T001632Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIAX23EXV2FITCT6GUY%2F20220405%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Signature=3f01f998092d7709de2f56e9bf5afdcb5458b38c55676e4cca21a88ce7af8d6b'}
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
      return queryInterface.bulkDelete('Songs', null, {});
  }
};
