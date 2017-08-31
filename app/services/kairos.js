import config from 'env-config';

const createFetch = (path, opts) => fetch(`${config.kairos.url}/${path}`, {
  ...opts,
  headers: {
    'Content-Type': 'application/json',
    'app_id': config.kairos.appId,
    'app_key': config.kairos.appKey,
  },
}).then(res => res.json());

export function* recognize({ image }) {
  return yield createFetch('recognize', {
    method: 'POST',
    body: { image, 'gallery_name': 'MyGallery' },
  });
}
