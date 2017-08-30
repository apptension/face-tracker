import config from 'env-config';

const createFetch = (path, body) => fetch(`${config.kairos.url}/${path}`, {
  method: 'POST',
  body,
  headers: {
    'Content-Type': 'application/json',
    'app_id': config.kairos.appId,
    'app_key': config.kairos.appKey,
  },
});

export function* recognize({ image }) {
  return yield createFetch('recognize', JSON.stringify({
    image,
    'gallery_name': 'MyGallery',
  }));
}
