const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const dir='./content/posts';

fs.readdirSync(dir).forEach(file=>{
  const full=path.join(dir,file);
  const parsed=matter(fs.readFileSync(full,'utf8'));

  if(new Date(parsed.data.scheduledFor)<=new Date() && !parsed.data.published){
    parsed.data.published=true;
    fs.writeFileSync(full,matter.stringify(parsed.content,parsed.data));
  }
});