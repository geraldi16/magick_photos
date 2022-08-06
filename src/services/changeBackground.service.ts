import axios from 'axios';

export const changeBackground = async (currentPhoto, backgroundData) => {
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', currentPhoto);
    if (backgroundData.type === 'color') {
        formData.append('bg_color', backgroundData.color);
    } else {
        formData.append('bg_image_url', backgroundData.url);
    }

   try {
        const result = await axios({
            method: 'post',
            url: 'https://api.remove.bg/v1.0/removebg',
            data: formData,
            responseType: 'arraybuffer',
            headers: {
            'X-Api-Key': process.env.REACT_APP_REMOVEBG_API_KEY || '',
            },
            encoding: null,
        });

        return result;
   } catch (error) {
        console.log(`error happen:  ${error.message}`);
        return { data: null };
   }
}