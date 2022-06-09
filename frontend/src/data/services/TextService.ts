export const TextService = {
    textLimit(text: string, maxSize: number): string{
        if(text.length < maxSize){
            return text;
        }

        return text.slice(0, maxSize) + '...';
    }
}